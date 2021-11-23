import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import { MessageList } from "./counter/MessageList";
import { MessageForm } from "./counter/MessageList/MessageForm";
import { INITIAL_MESSAGE } from "./counter/MessageList/constantes";
import { AUTER } from "./counter/MessageList/constantes";
import { ListAuter } from "./counter/MessageList/ListAuter";
import { MessageMenu } from "./counter/MessageList/MessageMenu";

export const App = () => {
  const now = new Date();
  const [messageList, setMessageList] = useState(INITIAL_MESSAGE);
  const [auter, setAuter] = useState(AUTER);
  const [textList, setTextList] = useState("Пусто");
  const [text, setText] = useState("");
  const [click, setClick] = useState(false);
  const [auterId, setAuterId] = useState(uuidv4());
  const [textId, setTextId] = useState(uuidv4());
  const [avatarId, setAvatarId] = useState(uuidv4);
  const [chatId, setChatId] = useState(uuidv4);
  const [messageFlexId, setMessageFlexId] = useState(uuidv4);
  const [dataId, setDataId] = useState(uuidv4());
  const hendlerChengeAuter = (e) => setAuter(e);
  const hendlerChengeText = (e) => setText(e);
  const heandlerClickMessege = () => {
    if (auter.length > 0) {
      setMessageList([
        ...messageList,
        {
          auter: auter,
          auterId: auterId,
          text: text,
          textId: textId,
          class: "human",
          data: now.getHours() + ":" + now.getMinutes(),
          dataId: dataId,
          avatarId: avatarId,
          chatId: chatId,
          messageFlexId: messageFlexId,
        },
      ]);
      setAvatarId(uuidv4);
      setChatId(uuidv4);
      setMessageFlexId(uuidv4);
      setAuterId(uuidv4);
      setTextId(uuidv4);
      setDataId(uuidv4);
      setTextList(text);
      setClick(!click);
    } else {
      alert("Введите ваше имя");
    }
  };
  useEffect(() => {
    if (messageList.length > 0) {
      setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            auter: "Бот",
            auterId: auterId,
            text: "Привет",
            textId: textId,
            class: "bot",
            data: now.getHours() + ":" + now.getMinutes(),
            dataId: dataId,
            avatarId: avatarId,
            chatId: chatId,
            messageFlexId: messageFlexId,
          },
        ]);
        setAvatarId(uuidv4);
        setChatId(uuidv4);
        setMessageFlexId(uuidv4);
        setAuterId(uuidv4);
        setTextId(uuidv4);
        setDataId(uuidv4);
        setTextList("Привет");
      }, 1500);
    }
  }, [click]);

  return (
    <div className="App">
      <div className="AuterMessege">
        <MessageMenu auter={auter} onChengeAuter={hendlerChengeAuter} />
        <ListAuter messageList={messageList} textList={textList} />
      </div>
      <div className="MessageConteiner">
        <div className="MessageText">
          <div className="Message">
            <MessageList messageList={messageList} />
          </div>
        </div>
        <MessageForm
          auter={auter}
          text={text}
          onClickMessege={heandlerClickMessege}
          onChengeText={hendlerChengeText}
        />
      </div>
    </div>
  );
};

export default App;
