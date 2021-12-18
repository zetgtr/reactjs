import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router";

import "./MessageList.css";
import { messageListSelector } from "../../Store/Messages/selector";
import { stringAvatar } from "../utils";
import { getMessagesFirebaseAction } from "../../Store/Messages/actions";

export const MessageList = () => {
  const { chatId } = useParams();
  const messageList = useSelector(messageListSelector);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(
        getMessagesFirebaseAction({ chatId, message: messageList?.chatId })
      );
  });
  return (
    <div>
      {messageList[chatId]?.map((message) => (
        <div key={message.id} className="flex">
          <Avatar {...stringAvatar(message.name)} />
          <div className="chat">
            <div className={message.chatClass}>
              <div>{message.name}</div>
              <p>{message.textMessage}</p>
            </div>
            <div className="data">{message.data} </div>
          </div>
        </div>
      ))}
    </div>
  );
};
