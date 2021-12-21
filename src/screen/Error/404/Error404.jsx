import React from "react";
import "./Error404.css";
import { ListAuthor } from "../../../Components/ListAuthor/ListAuthor";


export const Error404 = () => {

  return (
    <div className="App">
      <div className="AuthorMessege">
      <div className='Menu'></div>
      <ListAuthor />
      </div>
      <div className="MessageConteinerError">
      </div>
    </div>
  );
};
