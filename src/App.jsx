import React, { useState, useEffect } from "react";
import "./App.css";
import { MessageList } from "./counter/MessageList";
import { MessageForm } from "./counter/MessageList/MessageForm";
import { INITIAL_MESSAGE } from "./counter/MessageList/constantes";

export const App = () => {
  const [messageList, setMessageList] = useState(INITIAL_MESSAGE);
  const [auter, setAuter] = useState("");
  const [text, setText] = useState("");
  const [click, setClick] = useState(false);
  const hendlerChengeAuter = (e) => setAuter(e);
  const hendlerChengeText = (e) => setText(e);
  const heandlerClickMessege = () => {
    setMessageList([
      ...messageList,
      { auter: auter, text: text, class: "human" },
    ]);
    setClick(!click);
  };
  useEffect(() => {
    if (messageList.length > 0) {
      setTimeout(() => {
        setMessageList([
          ...messageList,
          { auter: "Бот", text: "Привет", class: "bot" },
        ]);
      }, 1500);
    }
  }, [click]);

  return (
    <div className="App">
      <header className="App-header">
        <MessageList messageList={messageList} />
        <MessageForm
          auter={auter}
          text={text}
          onClickMessege={heandlerClickMessege}
          onChengeAuter={hendlerChengeAuter}
          onChengeText={hendlerChengeText}
        />
      </header>
    </div>
  );
};

export default App;
