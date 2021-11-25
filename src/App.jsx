import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import { MessageList } from "./counter/MessageList";
import { MessageForm } from "./counter/MessageForm/MessageForm";
import { INITIAL_MESSAGE } from "./counter/MessageList/constants";
import { AUTHOR } from "./counter/MessageList/constants";
import { ListAuthor } from "./counter/ListAuthor/ListAuthor";
import { MessageMenu } from "./counter/MessageMenu/MessageMenu";

export const App = () => {
  
  const [messageList, setMessageList] = useState(INITIAL_MESSAGE);
  const [author, setAuthor] = useState(AUTHOR);
  const [textList, setTextList] = useState("Пусто");
  const [text, setText] = useState("");
  const [messageId, setMessageId] = useState(uuidv4());
  const [click, setClick] = useState(false);
  const hendlerChengeAuthor = (author) => setAuthor(author);
  const hendlerChengeText = (text) => setText(text);
  const handleAddMessage = () => {
    let now = new Date();
    if (author.length > 0) {
      setMessageList([
        ...messageList,
        {
          author: author,
          messageId: messageId,
          text: text,
          class: "human",
          data: now.getHours() + ":" + now.getMinutes(),
        },
      ]);
      setMessageId(uuidv4());
      setTextList(text);
      setClick(!click);
    } else {
      alert("Введите ваше имя");
    }
  };
  useEffect(() => {
    let now = new Date();
    if (messageList.length > 0) {
     let timer = setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            author: "Бот",
            messageId: messageId,
            text: "Привет",
            class: "bot",
            data: now.getHours() + ":" + now.getMinutes(),
          },
        ]);
        setMessageId(uuidv4());
        setTextList("Привет");
      }, 1500);
     return  () => {
       clearTimeout(timer)
     }
    }
  }, [click]);

  return (
    <div className="App">
      <div className="AuthorMessege">
        <MessageMenu author={author} onChengeAuthor={hendlerChengeAuthor} />
        <ListAuthor messageList={messageList} textList={textList} />
      </div>
      <div className="MessageConteiner">
        <div className="MessageText">
          <div className="Message">
            <MessageList messageList={messageList} />
          </div>
        </div>
        <MessageForm
          text={text}
          onClickMessege={handleAddMessage}
          onChengeText={hendlerChengeText}
        />
      </div>
    </div>
  );
};

export default App;
