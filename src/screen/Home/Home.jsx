import React from "react";
import "./Home.css";
import { ListAuthor } from "../../Components/ListAuthor/ListAuthor";
import { useSelector } from "react-redux";
import { fonSelector } from "../../Store/Settings/selector";

export const Home = () => {
  const { fon } = useSelector(fonSelector);
  return (
    <div className="App">
      <div className="AuthorMessege">
        <div className="Menu"></div>
        <ListAuthor />
      </div>
      <div
        className="MessageConteiner"
        style={{ backgroundImage: `url(${fon.url})` }}
      ></div>
    </div>
  );
};
