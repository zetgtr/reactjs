import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { chatsReducer } from "./Chats/reducer";
import { messagesReducer } from "./Messages/reducer";
import { profileReducer } from "./Profile/reducer";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./sagas/sagas";
import { fonReducer } from "./Settings/reducer";
import { authReducer } from "./Auth/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  fon: fonReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagaWatcher);

export const persistor = persistStore(store);
