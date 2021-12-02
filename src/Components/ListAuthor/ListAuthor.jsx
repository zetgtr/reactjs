import "./ListAuthor.css";
import React from "react";
import { ROUTER } from "../../Router/constants";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { chatListSelector } from "../../Store/Chats/selector";
import { addChatAction, delChatAction } from "../../Store/Chats/actions";
import { messageLastSelector } from "../../Store/Messages/selector";
import { stringAvatar } from "../utils";
import { delMessageAction } from "../../Store/Messages/actions";

export const ListAuthor = () => {
  const dispatch = useDispatch();
  const chatList = useSelector(chatListSelector);
  const messageLast = useSelector(messageLastSelector)
  const addChat = () => {
    let chatName = prompt("Введите название чата")
    if (chatName === null){
      alert('Вы не ввели название чата')
    }else{
    dispatch(addChatAction({chatName}))
    }
  }
  const delChat = (id, chatId) => {
    dispatch(delChatAction({id}))
    dispatch(delMessageAction({chatId}))
  }
  return (
    <div className="list">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {chatList.map((chats) => (
          <div key={chats.id} className="ListAuthor">
            <Link className="linkChat" to={ROUTER.CHAT + chats.chatId}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar {...stringAvatar(chats.name)} />
                </ListItemAvatar>
                <ListItemText
                  primary={chats.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline"}}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                      {messageLast[chats.chatId] ?? 'Пусто'}</Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Link>
            <IconButton
              itemID={chats.id}
              aria-label="delete"
              onClick={() => {
                delChat(chats.id, chats.chatId);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </List>
      <Fab
        sx={{ left: 237, position: "fixed", bottom: 20 }}
        color="primary"
        onClick={addChat}
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
