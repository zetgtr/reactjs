import React, { useEffect } from "react";
import "./MessageList.css";

import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  messageAutherSelector,
  messageListSelector,
} from "../../Store/Messages/selector";
import { stringAvatar } from "../utils";
import { addMessageBotAction } from "../../Store/Messages/actions";
import { profileSelector } from "../../Store/Profile/selector";

export const MessageList = () => {
  const dispatch = useDispatch();
  const { chatsId } = useParams();
  const messageList = useSelector(messageListSelector);
  const auther = useSelector(messageAutherSelector);
  const { name } = useSelector(profileSelector);
  messageList[chatsId] = messageList[chatsId] ?? [];
  useEffect(() => {
    let time = {};
    if (auther[chatsId] === name) {
      time = setTimeout(() => {
        dispatch(addMessageBotAction({ chatId: chatsId }));
      }, 1500);
    }
    return () => {
      clearTimeout(time);
    };
  }, [messageList[chatsId].length]);
  return (
    <div>
      {messageList[chatsId].map((message) => (
        <div key={message.id} className="flex">
          <Avatar {...stringAvatar(message.name)} />
          <div className="chat">
            <div>
              <div className={message.class}>{message.name}</div>
              <p>{message.textMessage}</p>
            </div>
            <div className="data">{message.data} </div>
          </div>
        </div>
      ))}
    </div>
  );
};
