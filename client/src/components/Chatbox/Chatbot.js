import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { FiMessageSquare, FiX } from "react-icons/fi";
const ChatContainer = styled.div`
  width: 300px;
  height: 340px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 1000;
  bottom: 80px;
  right: 20px;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  font-weight: 600;
  padding: 5px;

  span {
    font-size: 14px;
    color: #007bff;
  }
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const MessageBubble = styled.div`
  padding: 8px 8px;
  border-radius: 8px;
  max-width: 77%;
  background-color: ${({ sender }) => (sender === "user" ? "#007bff" : "#ddd")};
  color: ${({ sender }) => (sender === "user" ? "#fff" : "#000")};
  align-self: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LinkButton = styled.a`
  display: inline-block;
  margin-top: 5px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
  &:hover {
    background-color: #0056b3;
  }
`;
const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 5px;
`;

const OptionButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #28a745;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: fixed;
  z-index: 1000;
  bottom: 20px;
  right: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const LogoImage = styled.img`
  height: 30px;
  background: #f9f9f9;
  border-radius: 50%;
  box-shadow: 0 0 0 0.5px lightblue;
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (userInput) => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    try {
      const response = await axios.post(
        "https://danovalab-server.vercel.app/api/chat",
        {
          message: userInput,
        }
      );

      const botMessage = {
        sender: "bot",
        text: response.data.response,
        options: response.data.options || [],
        link: response.data.link || null,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Oops! Something went wrong. Try again." },
      ]);
    }
  };

  const clearMessages = () => {
    setMessages([]);
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Avatar onClick={clearMessages}>
        <FiMessageSquare />
      </Avatar>
      <ChatContainer isVisible={isVisible}>
        <Header>
          <div style={{ display: "flex", alignItems: "center" }}>
            <LogoImage
              src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662183/logo_vuude4.png"
              loading="lazy"
              alt="Logo"
            />
            <span>Chat Us</span>
          </div>
          <ClearButton onClick={clearMessages}>
            <FiX />
          </ClearButton>
        </Header>
        <Messages>
          {messages.map((msg, index) => (
            <MessageBubble key={index} sender={msg.sender}>
              {msg.text}
              {msg.options && msg.options.length > 0 && (
                <OptionsContainer>
                  {msg.options.map((option, i) => (
                    <OptionButton key={i} onClick={() => sendMessage(option)}>
                      {option}
                    </OptionButton>
                  ))}
                </OptionsContainer>
              )}
              {msg.link && (
                <LinkButton href={msg.link} target="_blank">
                  Complete Payment
                </LinkButton>
              )}
            </MessageBubble>
          ))}
          <div ref={messagesEndRef} />
        </Messages>
        <InputContainer>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            onKeyPress={(e) => e.key === "Enter" && sendMessage(input)}
          />
          <Button onClick={() => sendMessage(input)}>Send</Button>
        </InputContainer>
      </ChatContainer>
    </>
  );
};

export default Chatbot;
