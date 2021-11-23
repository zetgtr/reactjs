import React from "react";
import "./MessageList.css";

import Avatar from "@mui/material/Avatar";

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}`,
  };
}

export const MessageList = (props) => {
  return (
    <div>
      {props.messageList.map((message) => (
        <div key={message.messageFlexId} className="flex">
          <Avatar key={message.avatarId} {...stringAvatar(message.author)} />
          <div key={message.chatId} className="chat">
            <div>
            <div className={message.class} key={message.authorId}>
              {message.author}
            </div>
            <div key={message.textId}>{message.text}</div>
            </div>
            <div key={message.dataId} className="data">{message.data} </div>
          </div>
        </div>
      ))}
    </div>
  );
};
