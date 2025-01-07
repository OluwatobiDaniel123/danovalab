import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

// Configuration for the chatbot
const config = {
  botName: "HelperBot",
  initialMessages: [
    {
      id: "1",
      message: "Hi there! How can I assist you today?",
      type: "text",
    },
  ],
};

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.handleHello();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

class ActionProvider {
  constructor(createChatbotMessage, setStateFunc) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
  }

  handleHello = () => {
    const message = this.createChatbotMessage("Hello! How can I assist you?");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleDefault = () => {
    const message = this.createChatbotMessage(
      "I'm sorry, I didn't understand that."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={toggleChatbot}
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: 1000,
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          cursor: "pointer",
          fontSize: "24px",
        }}
      >
        {isOpen ? "×" : "💬"}
      </button>

      {/* Chatbot Container */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "10px",
            maxHeight: "500px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            zIndex: 999,
          }}
        >
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default Chatbox;
