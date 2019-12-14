import React, { useState } from "react";
const NewMessageForm = ({ onSend }) => {
  const [messageText, setMessageText] = useState("");

  const handleTextChange = event => {
    setMessageText(event.target.value);
  };
  const handleSend = () => {
    onSend(messageText);
    setMessageText("");
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleTextChange}
        value={messageText}
        data-testid="messageText"
      />
      <button data-testid="sendButton" onClick={handleSend}>
        Envoyer
      </button>
    </div>
  );
};

export default NewMessageForm;
