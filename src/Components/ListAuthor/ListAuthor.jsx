import "./ListAuthor.css";
import React, { useState } from "react";
import { INIT_CHATS, ROUTER } from "../../Router/constants";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { CHATSLIST } from "../MessageList/constants";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";


function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}`,
  };
}
 let i = 1; // извеняюсь за такой счетчик, не придумал что можно использовать он больше всего подходит
export const ListAuthor = (props) => {
  const [Chats, setChats] = useState(CHATSLIST);
 
  const handleAddChat = () => {
    let ChatId = "id" + ++i;
    INIT_CHATS[ChatId] = { name: "chat" + " " + i };
    let addChat = {
      name: INIT_CHATS[ChatId].name,
      id: i,
    };
    props.messageLast[ChatId] = "Пусто"
    setChats([...Chats, addChat]);
    CHATSLIST[i] = addChat
  };
  const handleDelChat = (id) => {
    let ChatId = "id" + id;
    delete INIT_CHATS[ChatId];
    
    
    setChats(Chats.filter(item => item.id !== id));
    if(id===1){
      id=0
    }
    delete CHATSLIST[id]
  };
  return (
    <div className="list">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {Chats.map((chats) => (
          <div key={chats.id} className="ListAuthor">
            <Link className="linkChat" to={ROUTER.CHAT + chats.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar {...stringAvatar(chats.name)} />
                </ListItemAvatar>
                <ListItemText
                  primary={chats.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      ></Typography>
                      {props.messageLast["id"+chats.id]}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Link>
            <IconButton
              itemID={chats.id}
              aria-label="delete"
              onClick={() => {
                handleDelChat(chats.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </List>
      <Fab
        sx={{ left: 237,
          position: 'fixed',
          bottom: 20 }}
        color="primary"
        onClick={handleAddChat}
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
