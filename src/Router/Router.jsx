import React from "react";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";

import {ROUTER } from "./constants";
import { Home } from "../screen/Home/Home";
import "./Router.css";
import { Chats } from "../screen/Chats/Chats";
import { Profile } from "../screen/Profile/Profile";
import { Error404 } from "../screen/Error/404";
import { NoChat } from "../screen/Error/NoChat";

export const Router = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);  // это с material код я его не писал сам
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
          <Home />
        </Route>
        <Route exact path={ROUTER.CHATS}>
          <Chats />
        </Route>
        <Route exact path={ROUTER.NO_CHAT}>
          <NoChat />
        </Route>
        <Route exact path={ROUTER.PROFILE}>
          <Profile />
        </Route>
        <Route path={ROUTER.NOT_FOUND}>
          <Error404 />
        </Route>
        <Route>
          <Redirect to={ROUTER.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
