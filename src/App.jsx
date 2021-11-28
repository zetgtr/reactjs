import React from "react";
import "./App.css";
import { Router } from "./Router";

export const ROUTER = {
  HOME: "/",
  PROFILE: "/profile",
  CHATS: "/chats",
};

export const App = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default App;
