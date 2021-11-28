import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Store";
import {
  hendleChengeAuthorAction,
  toggleUserNameAction,
} from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selector";

import "./Profile.css";

export const Profile = (props) => {
  const dispatch = useDispatch();

  const { name, showName } = useSelector(profileSelector);

  const toggleUserName = () => {
    dispatch(toggleUserNameAction());
  };

  const hendleChengeAuthor = (textName) => {
    dispatch(hendleChengeAuthorAction(textName));
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
          onChange={(e) => hendleChengeAuthor(e.target.value)} // props.onChengeAuthor
        />
        <div className="showName">
          <input type="checkbox" onClick={toggleUserName} />
          <label>Показать введенное имя</label>
          <h1>{showName && name}</h1>
        </div>
      </div>

      <div className="MessageConteiner"></div>
    </div>
  );
};
