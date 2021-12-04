import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import "./MessageForm.css";
import { profileSelector } from "../../Store/Profile/selector";
import { addMessageWithThink } from "../../Store/Messages/actions";

export const MessageForm = () => {
  const { chatsId } = useParams();
  const dispatch = useDispatch();
  const { name } = useSelector(profileSelector);
  const [textMessage, setTextMessage] = useState("");
  const chengeTextMessage = (text) => {
    setTextMessage(text);
  };
  const addMessage = () => {
    if (name) {
      dispatch(addMessageWithThink({ name, textMessage, chatId: chatsId, chatClass: "human"}));
    } else {
      alert("Введите ваше имя");
    }
  };
  return (
    <div className="TextField-without-border-radius">
      <TextField
        name="url"
        variant="outlined"
        sx={{
          borderRadius: "50px",
          backgroundColor: "aliceblue",
          width: "400px",
          outline: "none",
        }}
        value={textMessage}
        onChange={(e) => chengeTextMessage(e.target.value)}
        id="outlined-textarea"
        label="Ваше сообщение:"
        autoFocus
        placeholder="Сообщение:"
        multiline
      />

      <Button
        sx={{ borderRadius: "50%", height: " 57px", position: "relative" }}
        variant="contained"
        onClick={addMessage}
      >
        <SendIcon
          sx={{
            width: "30px",
            height: "30px",
            position: "absolute",
            left: "20px",
          }}
        />
      </Button>
    </div>
  );
};
