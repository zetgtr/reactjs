import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@mui/material";

import { fonSelector } from "../../Store/Settings/selector";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { ROUTER } from "../../Router/constants";
import {
  chengeEmailAction,
  chengeNameAction,
  chengePasswordAction,
  singUpAction,
} from "../../Store/Auth/actions";
import { authSelector } from "../../Store/Auth/selector";

export const SignUp = () => {
  const { fon } = useSelector(fonSelector);
  const { email, name, password } = useSelector(authSelector);
  const dispatch = useDispatch();

  const hendleChengeEmail = (textEmail) => {
    dispatch(chengeEmailAction(textEmail));
  };

  const hendleChengeName = (textName) => {
    dispatch(chengeNameAction(textName));
  };

  const hendleChengePassword = (textPassword) => {
    dispatch(chengePasswordAction(textPassword));
  };

  const hendleSingUp = () => {
    dispatch(singUpAction({ email, password }));
  };

  return (
    <div className="App">
      <div className="AuthorMessege Simgin">
        <div className="Menu"></div>
        <TextField
          sx={{ margin: "20px" }}
          id="standard-helperText"
          label="Email"
          variant="standard"
          value={email}
          onChange={(e) => hendleChengeEmail(e.target.value)}
        />
        <TextField
          sx={{ marginBottom: "20px" }}
          id="standard-helperText"
          label="Ваше имя"
          variant="standard"
          value={name}
          onChange={(e) => hendleChengeName(e.target.value)}
        />
        <TextField
          id="standard-password-input"
          label="Пароль"
          type="password"
          autoComplete="current-password"
          variant="standard"
          value={password}
          onChange={(e) => hendleChengePassword(e.target.value)}
        />
        <Button
          sx={{ marginTop: "20px" }}
          onClick={hendleSingUp}
          variant="contained"
        >
          Зарегистрироваться
        </Button>
        <h4>У вас уже есть аккаунт?</h4>
        <Link className="link" to={ROUTER.SIGN_IN}>
          <Button variant="contained">Войти</Button>
        </Link>
      </div>
      <div
        className="MessageConteiner"
        style={{ backgroundImage: `url(${fon.url})` }}
      ></div>
    </div>
  );
};
