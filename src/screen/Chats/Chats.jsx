import React from "react";

import "./Chats.css";
import { MessageList } from "../../Components/MessageList";
import { MessageForm } from "../../Components/MessageForm/MessageForm";
import { ListAuthor } from "../../Components/ListAuthor/ListAuthor";
import { Redirect, useParams } from "react-router";
import { ROUTER } from "../../Router/constants";



export const Chats = (props) => {
  const { chatsId } = useParams();
  if (!chatsId || !props.chatList[chatsId]) {
    return <Redirect to={ROUTER.NO_CHAT} />;
  }
  return (
    <div className="App">
      <div className="AuthorMessege">
        <div className="Menu"></div>
        <ListAuthor messageList={props.messageList} messageLast={props.messageLast} />
      </div>
      <div className="MessageConteiner">
        <div className="MessageText">
          <div className="Message">
            <MessageList chatsId={chatsId} messageList={props.messageList} />
          </div>
        </div>
        <MessageForm
          text={props.text}
          chatsId={chatsId}
          onClickMessege={props.onClickMessege}
          onChengeText={props.onChengeText}
        />
      </div>
    </div>
  );
};
