import React, { useState } from "react";
import NewMessageForm from "./NewMessageForm";
import MessageList from "./MessageList";
function App() {
  const [messages, updateMessage] = useState([]);
  const sendHandler = message =>
    updateMessage(messages => [...messages, message]);
  return (
    <div>
      <NewMessageForm onSend={sendHandler} />
      <MessageList data={messages} />
    </div>
  );
}

export default App;
