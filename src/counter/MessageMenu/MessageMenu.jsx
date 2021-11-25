import React from "react";
import Menu from "@mui/material/Menu";
import TextField from "@mui/material/TextField";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

export const MessageMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: "gray", mt: "5px" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <TextField
          sx={{ padding: "15px" }}
          id="standard-basic"
          label="Ваше имя:"
          variant="standard"
          value={props.author}
          onChange={(e) => props.onChengeAuthor(e.target.value)}
        />
      </Menu>
    </div>
  );
};
