import React, { useEffect } from "react";
import "./MessageList.css";

import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { messageListSelector } from "../../Store/Messages/selector";
import { stringAvatar } from "../utils";
import { addMessageBotAction } from "../../Store/Messages/actions";

export const MessageList = () => {
  const dispatch = useDispatch();
  const { chatsId } = useParams();
  const messageList = useSelector(messageListSelector);
  messageList[chatsId] = messageList[chatsId] ?? [];
  useEffect(() => {
    let time = setTimeout(() => {
      dispatch(addMessageBotAction({ chatId: chatsId }));
    }, 1500);
    clearTimeout(time); // он так не чего не отправляет, а если я уберу он вечно отправляет сообщение (я знаю это 1ые уроки, но я не понимаю как это убрать подскажите пожалуйста напишите как это должно выглядеть)
    return time;
  }, [messageList[chatsId].length]);
  return (
    <div>
      {messageList[chatsId].map((message) => (
        <div key={message.id} className="flex">
          <Avatar {...stringAvatar(message.name)} />
          <div className="chat">
            <div>
              <div className={message.class}>{message.name}</div>
              <div>{message.textMessage}</div>
            </div>
            <div className="data">{message.data} </div>
          </div>
        </div>
      ))}
    </div>
  );
};
