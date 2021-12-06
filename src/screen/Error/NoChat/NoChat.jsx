import React from "react";
import "./NoChat.css";
import { ListAuthor } from "../../../Components/ListAuthor/ListAuthor";


export const NoChat = () => {

  return (
    <div className="App">
      <div className="AuthorMessege">
      <div className='Menu'></div>
        <ListAuthor />
      </div>
      <div className="MessageConteiner">
        <h1 className="No-Chat">ЧАТА НЕ СУЩЕСТВУЕТ</h1>
      </div>
    </div>
  );
};
