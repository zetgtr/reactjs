import React from "react";

import "./Chats.css";
import { MessageList } from "../../Components/MessageList";
import { MessageForm } from "../../Components/MessageForm/MessageForm";
import { ListAuthor } from "../../Components/ListAuthor/ListAuthor";
import { Redirect, useParams } from "react-router";
import { ROUTER } from "../../Router/constants";
import { chatListSelector } from "../../Store/Chats/selector";
import { useSelector } from "react-redux";

export const Chats = () => {
  const { chatsId } = useParams();
  const chatList = useSelector(chatListSelector);
  console.log(chatsId);
  let chatFilter = new RegExp(chatsId, "i");
  let chat = chatList.filter((item) => chatFilter.test(item.chatId));
  if (!chatsId || chat.length === 0) {
    return <Redirect to={ROUTER.NO_CHAT} />;
  }
  return (
    <div className="App">
      <div className="AuthorMessege">
        <div className="Menu"></div>
        <ListAuthor />
      </div>
      <div className="MessageConteiner">
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
