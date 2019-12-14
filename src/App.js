import React from "react";
import NewMessageForm from "./NewMessageForm";
function App() {
  const sendHandler = message => console.log(message);
  return (
    <div>
      <NewMessageForm onSend={sendHandler} />
    </div>
  );
}

export default App;
