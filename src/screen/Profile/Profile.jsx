import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  chengeAuthorAction,
  toggleUserNameAction,
} from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selector";
import { fonSelector } from "../../Store/Settings/selector";
import "./Profile.css";

export const Profile = () => {
  const dispatch = useDispatch();

  const { name, showName } = useSelector(profileSelector);
  const { fon } = useSelector(fonSelector);
  const toggleUserName = () => {
    dispatch(toggleUserNameAction());
  };

  const hendleChengeAuthor = (textName) => {
    dispatch(chengeAuthorAction(textName));
  };

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
        <div className="showName">
          <FormControlLabel
            control={<Checkbox defaultChecked onClick={toggleUserName} />}
            label="Показать введенное имя?"
          />
          <h1>{showName && name}</h1>
        </div>
      </div>

      <div
        className="MessageConteiner"
        style={{ backgroundImage: `url(${fon.url})` }}
      ></div>
    </div>
  );
};
