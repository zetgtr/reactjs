import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import { MessageList } from "./counter/MessageList";
import { MessageForm } from "./counter/MessageList/MessageForm";
import { INITIAL_MESSAGE } from "./counter/MessageList/constants";
import { AUTHOR } from "./counter/MessageList/constants";
import { ListAuthor } from "./counter/MessageList/ListAuthor";
import { MessageMenu } from "./counter/MessageList/MessageMenu";

export const App = () => {
  const now = new Date();
  const [messageList, setMessageList] = useState(INITIAL_MESSAGE);
  const [author, setAuthor] = useState(AUTHOR);
  const [textList, setTextList] = useState("Пусто");
  const [text, setText] = useState("");
  const [authorId, setAuthorId] = useState(uuidv4());
  const [textId, setTextId] = useState(uuidv4());
  const [avatarId, setAvatarId] = useState(uuidv4);
  const [chatId, setChatId] = useState(uuidv4);
  const [messageFlexId, setMessageFlexId] = useState(uuidv4);
  const [dataId, setDataId] = useState(uuidv4());
  const [click, setClick] = useState(false);
  const hendlerChengeAuthor = (author) => setAuthor(author);
  const hendlerChengeText = (text) => setText(text);
  const handleAddMessage = () => {
    if (author.length > 0) {
      setMessageList([
        ...messageList,
        {
          author: author,
          authorId: authorId,
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
      setAuthorId(uuidv4);
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
            author: "Бот",
            authorId: authorId,
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
        setAuthorId(uuidv4);
        setTextId(uuidv4);
        setDataId(uuidv4);
        setTextList("Привет");
      }, 1500);
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
