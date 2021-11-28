import { TextField } from "@mui/material";
import React from "react";

import "./Profile.css";

export const Profile = (props) => {

  return (
    <div className="App">
      <div className="AuthorMessege">
      <div className='Menu'></div>
      <TextField
          sx={{ padding: "15px", ml:'32px' }}
          id="standard-basic"
          label="Ваше имя:"
          variant="standard"
          value={props.author}
          onChange={(e) => props.onChengeAuthor(e.target.value)}
        />
      </div>
      
      <div className="MessageConteiner">
          <h1>{props.author}</h1>
      </div>
    </div>
  );
};
