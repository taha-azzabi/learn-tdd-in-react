import React from "react";
const NewMessageForm = () => {
  return (
    <div>
      <input type="textarea" data-testid="messageText" />
      <button type="button" data-testid="sendButton">
        Envoyer
      </button>
    </div>
  );
};

export default NewMessageForm;
