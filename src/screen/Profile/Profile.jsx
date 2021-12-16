import { Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFirebaseNameAction,
  chengeAuthorAction,
} from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selector";
import { fonSelector } from "../../Store/Settings/selector";
import "./Profile.css";

export const Profile = () => {
  const dispatch = useDispatch();

  const { name } = useSelector(profileSelector);
  const { fon } = useSelector(fonSelector);

  const hendleChengeAuthor = (textName) => {
    dispatch(chengeAuthorAction(textName));
  };

  const chengeAuthor = () => {
    dispatch(changeFirebaseNameAction({name}))
  }

  return (
    <div className="App">
      <div className="AuthorMessege">
        <div className="Menu"></div>
        <TextField
          sx={{ padding: "15px", ml: "32px" }}
          id="standard-basic"
          label="Ваше имя:"
          variant="standard"
          value={name}
          onChange={(e) => hendleChengeAuthor(e.target.value)}
        />
        
        <Button
          sx={{ marginTop: "20px" }}
          onClick={chengeAuthor}
          variant="contained"
        >
          Приминить
        </Button>
        
      </div>

      <div
        className="MessageConteiner"
        style={{ backgroundImage: `url(${fon.url})` }}
      ></div>
    </div>
  );
};
