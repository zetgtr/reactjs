import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";

import { INIT_CHATS, ROUTER } from "./constants";
import { Home } from "../screen/Home/Home";
import "./Router.css";
import { Chats } from "../screen/Chats/Chats";
import { Profile } from "../screen/Profile/Profile";
import {
  INITIAL_MESSAGE,
  MESSAGELAST,
} from "../Components/MessageList/constants";
import { AUTHOR } from "../Components/MessageList/constants";

export const Router = () => {
  const [chatList] = useState(INIT_CHATS);
  const [click, setClick] = useState(false);
  const [botId, setBotId] = useState("id1");
  const [messageList, setMessageList] = useState([]);
  const [author, setAuthor] = useState(AUTHOR);
  const [messageLast, setMessageLast] = useState({ id1: "Пусто" });
  const [text, setText] = useState("");
  const hendleChengeAuthor = (author) => setAuthor(author);
  const handleChangeText = (text) => setText(text);
  const handleAddMessage = (chatId) => {
    let now = new Date();
    if (author.length > 0) {
      MESSAGELAST[chatId] = text;
      INITIAL_MESSAGE[chatId] = [
        ...messageList[chatId],
        {
          author: author,
          messageId: uuidv4(),
          text: text,
          class: "human",
          data: now.getHours() + ":" + now.getMinutes(),
        },
      ];
      setMessageList(INITIAL_MESSAGE); // Я вот про это спрашивал на уроке без click оно не работает
      console.log(messageList);
      setMessageLast(MESSAGELAST);
      setBotId(chatId);
      setClick(!click);
    } else {
      alert("Введите ваше имя");
    }
  };
  useEffect(() => {
    let now = new Date();
    if (messageList[botId] !== undefined) {
      console.log(messageList.length);
      let timer = setTimeout(() => {
        INITIAL_MESSAGE[botId] = [
          ...messageList[botId],
          {
            author: "Бот",
            messageId: uuidv4(),
            text: "Привет",
            class: "bot",
            data: now.getHours() + ":" + now.getMinutes(),
          },
        ];

        setMessageList(INITIAL_MESSAGE);
        MESSAGELAST[botId] = "Привет";
        setMessageLast(MESSAGELAST);
        setText("");
      }, 1500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [click]); //если я делаю message.length то useEfect выполняется вечно

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <BrowserRouter>
      <div className="conteiner">
        <Button
          id="basic-button"
          sx={{ position: "absolute" }}
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon sx={{ color: "gray", mt: "5px", zIndex: 1 }} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link className="link" to={ROUTER.HOME}>
            <MenuItem onClick={handleClose}>Главная</MenuItem>
          </Link>
          <Link className="link" to={ROUTER.PROFILE}>
            <MenuItem onClick={handleClose}>Профиль</MenuItem>
          </Link>
        </Menu>
      </div>
      <Switch>
        <Route exact path={ROUTER.HOME}>
          <Home messageLast={messageLast} messageList={messageList} />
        </Route>
        <Route exact path={ROUTER.CHATS}>
          <Chats
            chatList={chatList}
            messageLast={messageLast}
            onChengeText={handleChangeText}
            onClickMessege={handleAddMessage}
            text={text}
            messageList={messageList}
          />
        </Route>
        <Route exact path={ROUTER.NO_CHAT}>
          No chat content
        </Route>
        <Route exact path={ROUTER.PROFILE}>
          <Profile author={author} onChengeAuthor={hendleChengeAuthor} />
        </Route>
        <Route path={ROUTER.NOT_FOUND}>Not found 404</Route>
        <Route>
          <Redirect to={ROUTER.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
