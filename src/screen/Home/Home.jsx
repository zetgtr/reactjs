import React from "react";
import "./Home.css";
import { ListAuthor } from "../../Components/ListAuthor/ListAuthor";


export const Home = () => {

  return (
    <div className="App">
      <div className="AuthorMessege">
      <div className='Menu'></div>
        <ListAuthor />
      </div>
      <div className="MessageConteiner">
      </div>
    </div>
  );
};
