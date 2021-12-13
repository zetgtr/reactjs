import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@mui/material";

import { fonSelector } from "../../Store/Settings/selector";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { ROUTER } from "../../Router/constants";
import { chengeEmailAction, chengePasswordAction, singInAction } from "../../Store/Auth/actions";
import { authSelector } from "../../Store/Auth/selector";

export const SignIn = () => {
  const { email, password } = useSelector(authSelector);
  const dispatch = useDispatch()

  const hendleChengeEmail = (textEmail) => {
    dispatch(chengeEmailAction(textEmail));
  };
  const hendleChengePassword = (textPassword) => {
    dispatch(chengePasswordAction(textPassword));
  };

  const hendleSingIn = () => {
    dispatch(singInAction({email, password}))
  }

  const { fon } = useSelector(fonSelector);
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
          id="standard-password-input"
          label="Пароль"
          type="password"
          autoComplete="current-password"
          variant="standard"
          value={password}
          onChange={(e) => hendleChengePassword(e.target.value)}
        />
        <Button
          sx={{ marginTop: "20px", marginBottom: "10px" }}
          variant="contained"
          href="#contained-buttons"
          onClick={hendleSingIn}
        >
          Войти
        </Button>
        <Link className="link" to={ROUTER.SIGN_UP}>
          <Button
            sx={{ marginBottom: "10px" }}
            variant="contained"
            href="#contained-buttons"
          >
            Зарегистрироваться
          </Button>
        </Link>
      </div>
      <div
        className="MessageConteiner"
        style={{ backgroundImage: `url(${fon.url})` }}
      ></div>
    </div>
  );
};
