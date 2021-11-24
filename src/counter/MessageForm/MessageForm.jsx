import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import "./MessageForm.css";

export const MessageForm = (props) => {
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
        value={props.text}
        onChange={(e) => props.onChengeText(e.target.value)}
        id="outlined-textarea"
        label="Ваше сообщение:"
        autoFocus
        placeholder="Сообщение:"
        multiline
      />

      <Button
        sx={{ borderRadius: "50%", height: " 57px", position: "relative" }}
        variant="contained"
        onClick={props.onClickMessege}
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
