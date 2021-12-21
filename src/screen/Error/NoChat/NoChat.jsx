import React from "react";
import "./NoChat.css";
import { ListAuthor } from "../../../Components/ListAuthor/ListAuthor";
import { fonSelector } from "../../../Store/Settings/selector";
import { useSelector } from "react-redux";


export const NoChat = () => {
  const { fon } = useSelector(fonSelector);
  return (
    <div className="App">
      <div className="AuthorMessege">
      <div className='Menu'></div>
        <ListAuthor />
      </div>
      <div className="MessageConteiner"
       style={{ backgroundImage: `url(${fon.url})` }}>
        <h1 className="No-Chat">ЧАТА НЕ СУЩЕСТВУЕТ</h1>
      </div>
    </div>
  );
};
