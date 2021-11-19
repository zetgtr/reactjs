import "./MessageForm.css";

export const MessageForm = (props) => {
  return (
    <div className="formMessage">
      <input
        value={props.auter}
        onChange={(e) => props.onChengeAuter(e.target.value)}
        placeholder="Ваше имя"
        className="formAuter"
      />

      <input
        value={props.text}
        onChange={(e) => props.onChengeText(e.target.value)}
        placeholder="Введите сообщение"
        className="formText"
      />

      <button className="formButton" onClick={props.onClickMessege}>Отправить</button>
    </div>
  );
};
