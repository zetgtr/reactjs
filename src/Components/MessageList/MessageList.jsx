import React, { useEffect } from "react";
import "./MessageList.css";

import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { messageListSelector } from "../../Store/Messages/selector";
import { stringAvatar } from "../utils";
import { getMessagesFirebaseAction } from "../../Store/Messages/actions";
import { authSelector } from "../../Store/Auth/selector";

export const MessageList = () => {
  const { chatId } = useParams();
  const messageList = useSelector(messageListSelector);
  const dispatch = useDispatch();
  const { name } = useSelector(authSelector);
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
              <div>{name}</div>
              <p>{message.textMessage}</p>
            </div>
            <div className="data">{message.data} </div>
          </div>
        </div>
      ))}
    </div>
  );
};
