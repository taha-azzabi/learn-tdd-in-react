import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import NewMessageForm from "./../NewMessageForm";

describe("<NewMessageForm/>", () => {
  let getByTestId;

  afterEach(cleanup);

  describe("clicking the send button", () => {
    let sendHandler;
    beforeEach(() => {
      //Mock function also known as spies => Permet d'espionner le comportement d'une function
      sendHandler = jest.fn();
      //Render the component
      ({ getByTestId } = render(<NewMessageForm onSend={sendHandler} />));
      //Ajouter un message
      fireEvent.change(getByTestId("messageText"), {
        target: { value: "New message" }
      });
      //Performer un clique event
      fireEvent.click(getByTestId("sendButton"));
    });
    //Tester la résultat
    it("Should clear the message after successful click", () => {
      expect(getByTestId("messageText").value).toEqual("");
    });
    //? Next => The way we can send data to the parent component is by taking in an
    // event handler and calling it.
    //
    it("Call the send handler", () => {
      expect(sendHandler).toHaveBeenCalledWith("New message");
    });
  });
});
