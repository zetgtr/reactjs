import React from "react";
import "./MessageList.css";

import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  messageListSelector,
} from "../../Store/Messages/selector";
import { stringAvatar } from "../utils";

export const MessageList = () => {
  const { chatId } = useParams();
  const messageList = useSelector(messageListSelector);
  return (
    <div>
      {messageList[chatId]?.map((message) => (
        <div key={message.id} className="flex">
          <Avatar {...stringAvatar(message.name)} />
          <div className="chat">
            <div>
              <div className={message.chatClass}>{message.name}</div>
              <div>{message.textMessage}</div>
            </div>
            <div className="data">{message.data} </div>
          </div>
        </div>
      ))}
    </div>
  );
};
