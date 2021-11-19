import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./MessageList.css";

export const MessageList = (props) => {
  // const [messageList, setMessageList] = useState(INITIAL_MESSAGE);
  // const [auter, setAuter] = useState("");
  // const [text, setText] = useState("");
  // const [click, setClick] = useState(false);
  // const hendleAuterChenge = (e) => setAuter(e.target.value);
  // const hendleTextChenge = (e) => setText(e.target.value);
  // const hendleClick = () => {
  // setClick(!click);
  // setMessageList([...props.messageList, { auter: auter, text: text, class: "human" }]);
  // };

  // useEffect(() => {
  //   if (props.messageList.length > 0) {
  //     setMessageList([...props.messageList, { auter: "Бот", text: "Привет", class: "bot" }]);
  //   }
  // }, [click]);

  return (
    <div>
      <div className="chat">
        <br />
        {props.messageList.map((message) => (
          <div className={message.class}>
            <div key={uuidv4()}>{message.auter}</div>
            <div key={uuidv4()}>{message.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
