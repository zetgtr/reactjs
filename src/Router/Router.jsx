import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import { CircularProgress } from "@mui/material";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import firebase from "firebase";

import "./Router.css";
import { ROUTER } from "./constants";
import { Home } from "../screen/Home/Home";
import { Chats } from "../screen/Chats/Chats";
import { Profile } from "../screen/Profile/Profile";
import { Error404 } from "../screen/Error/404";
import { NoChat } from "../screen/Error/NoChat";
import { Settings } from "../screen/Settings";
import { SignIn } from "../screen/Signin";
import { SignUp } from "../screen/SignUp";
import { PrivateRoute } from "../Components/PrivateRoute";
import { PublicRoute } from "../Components/PublicRoute";
import { authAction } from "../Store/Auth/actions";
import { authSelector } from "../Store/Auth/selector";

export const Router = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  const open = Boolean(isMenuOpen);
  const handleClick = (event) => {
    setIsMenuOpen(event.currentTarget);
  };
  const handleClose = () => {
    setIsMenuOpen(null);
  };

  const { auth } = useSelector(authSelector);

  const dispatch = useDispatch();
  const { loading } = useSelector(authSelector);
  useEffect(() => {
    dispatch(authAction());
  }, [dispatch]);

  const hendleExitUser = () => {
    firebase.auth().signOut()
    dispatch(authAction())
  };

  if (loading) return <CircularProgress />;

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
          anchorEl={isMenuOpen}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {auth && (
            <Link className="link" to={ROUTER.HOME}>
              <MenuItem onClick={handleClose}>Главная</MenuItem>
            </Link>
          )}
          {auth && (
            <Link className="link" to={ROUTER.PROFILE}>
              <MenuItem onClick={handleClose}>Профиль</MenuItem>
            </Link>
          )}
          {auth && (
            <Link className="link" to={ROUTER.SETTINGS}>
              <MenuItem onClick={handleClose}>Настройки</MenuItem>
            </Link>
          )}
          {!auth && (
            <Link className="link" to={ROUTER.SIGN_IN}>
              <MenuItem onClick={handleClose}>Войти</MenuItem>
            </Link>
          )}
          {!auth && (
            <Link className="link" to={ROUTER.SIGN_UP}>
              <MenuItem onClick={handleClose}>Зарегестрироватся</MenuItem>
            </Link>
          )}
          {auth && <div onClick={hendleExitUser}><MenuItem onClick={handleClose}>Выйти</MenuItem></div>}
        </Menu>
      </div>
      <Switch>
        <PrivateRoute exact path={ROUTER.SETTINGS}>
          <Settings />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTER.HOME}>
          <Home />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTER.CHATS}>
          <Chats />
        </PrivateRoute>
        <Route exact path={ROUTER.NO_CHAT}>
          <NoChat />
        </Route>
        <PrivateRoute exact path={ROUTER.PROFILE}>
          <Profile />
        </PrivateRoute>
        <Route path={ROUTER.NOT_FOUND}>
          <Error404 />
        </Route>
        <PublicRoute exact path={ROUTER.SIGN_IN}>
          <SignIn />
        </PublicRoute>
        <PublicRoute exact path={ROUTER.SIGN_UP}>
          <SignUp />
        </PublicRoute>
        <Route>
          <Redirect to={ROUTER.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
