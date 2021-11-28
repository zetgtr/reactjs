import React from "react";
import "./Home.css";
import { ListAuthor } from "../../Components/ListAuthor/ListAuthor";


export const Home = (props) => {

  return (
    <div className="App">
      <div className="AuthorMessege">
      <div className='Menu'></div>
        <ListAuthor messageList={props.messageList} messageLast={props.messageLast} />
      </div>
      <div className="MessageConteiner">
      </div>
    </div>
  );
};
