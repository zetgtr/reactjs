import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import { Router } from "./Router";
import { persistor, store } from "./Store";

export const ROUTER = {
  HOME: "/",
  PROFILE: "/profile",
  CHATS: "/chats",
};

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
