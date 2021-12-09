import React from "react";

import "./Chats.css";
import { MessageList } from "../../Components/MessageList";
import { MessageForm } from "../../Components/MessageForm/MessageForm";
import { ListAuthor } from "../../Components/ListAuthor/ListAuthor";
import { Redirect, useParams } from "react-router";
import { ROUTER } from "../../Router/constants";
import { chatListSelector } from "../../Store/Chats/selector";
import { useSelector } from "react-redux";
import { fonSelector } from "../../Store/Settings/selector";

export const Chats = () => {
  const { chatId } = useParams();
  const { fon } = useSelector(fonSelector);
  const chatList = useSelector(chatListSelector);
  const no_chat = chatList.find((item) => item.chatId === chatId);
  if (!chatId || !no_chat) {
    return <Redirect to={ROUTER.NO_CHAT} />;
  }
  return (
    <div className="App">
      <div className="AuthorMessege">
        <div className="Menu"></div>
        <ListAuthor />
      </div>
      <div
        className="MessageConteiner"
        style={{ backgroundImage: `url(${fon.url})` }}
      >
        <div className="MessageText">
          <div className="Message">
            <MessageList />
          </div>
        </div>
        <MessageForm />
      </div>
    </div>
  );
};
