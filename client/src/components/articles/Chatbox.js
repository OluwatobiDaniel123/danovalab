// // Chatbox.js
// import React, { useState, useEffect, useRef } from "react";
// import styled from "styled-components";
// import { IoClose } from "react-icons/io5";
// const ChatContainer = styled.div`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   width: 300px;
//   background-color: white;
//   border-radius: 8px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
//   overflow: hidden;
//   transition: all 0.3s ease;
//   display: ${({ isOpen }) => (isOpen ? "block" : "none")};
// `;

// const ChatHeader = styled.div`
//   background-color: #007bff;
//   color: white;
//   padding: 10px;
//   display: flex;
//   justify-content: space-between;
//   text-align: center;
//   align-items: center;
//   cursor: pointer;
// `;

// const ChatBody = styled.div`
//   padding: 10px;
//   max-height: 250px;
//   overflow-y: auto;
// `;

// const Message = styled.div`
//   padding: 10px;
//   border-radius: 8px;
//   margin: 5px 0;
//   max-width: 70%;
//   align-self: ${({ sender }) =>
//     sender === "user" ? "flex-end" : "flex-start"};
//   background-color: ${({ sender }) =>
//     sender === "user" ? "#d1e7dd" : "#f1f1f1"};
// `;

// const Avatar = styled.img`
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
//   vertical-align: middle;
// `;

// const InputContainer = styled.div`
//   display: flex;
//   padding: 10px;
//   border-top: 1px solid #ccc;
// `;

// const Input = styled.input`
//   flex: 1;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   padding: 4px;
//   margin-left: 3px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const CancelButton = styled.button`
//   padding: 4px;
//   margin-left: 3px;
//   background-color: #dc3545;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #c82333;
//   }
// `;

// const ToggleButton = styled.button`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const Chatbox = () => {
//   const chatBodyRef = useRef(null);
//   const [messages, setMessages] = useState([
//     {
//       text: "Welcome to Danovalab, Most Creative Software Development Team",
//       sender: "bot",
//     },
//   ]);
//   const [inputValue, setInputValue] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSendMessage = () => {
//     if (inputValue.trim()) {
//       const userMessage = { text: inputValue, sender: "user" };
//       setMessages((prevMessages) => [...prevMessages, userMessage]);
//       setInputValue("");

//       // Simulate bot response
//       setTimeout(() => {
//         const botResponse = generateBotResponse(inputValue);
//         setMessages((prevMessages) => [...prevMessages, botResponse]);
//       }, 1000); // Simulate a delay for the bot response
//     }
//   };

//   const handleCancelMessage = () => {
//     setInputValue("");
//   };

//   const generateBotResponse = (userInput) => {
//     let response = "I am not sure how to respond to that.";
//     if (userInput.toLowerCase().includes("hello")) {
//       response = "Hello! How can I assist you today?";
//     } else if (userInput.toLowerCase().includes("quote")) {
//       response = "Sure! Please provide your requirements for a quote.";
//     } else if (userInput.toLowerCase().includes("website")) {
//       response =
//         "We offer various web design services. What do you need help with?";
//     }
//     return { text: response, sender: "bot" };
//   };

//   useEffect(() => {
//     if (chatBodyRef.current) {
//       chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
//     }
//   }, [messages]);

//   return (
//     <>
//       <ToggleButton onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "-" : "+"}
//       </ToggleButton>
//       {/* <ChatContainer isOpen={isOpen}>
//         <ChatHeader onClick={() => setIsOpen(!isOpen)}>
//           <p> Chat with Us</p> <IoClose />
//         </ChatHeader>
//         <ChatBody>
//           {messages.map((msg, index) => (
//             <Message
//               key={index}
//               style={{
//                 alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
//               }}
//             >
//               {msg.sender === "user" ? (
//                 <span>{msg.text}</span>
//               ) : (
//                 <>
//                   <Avatar
//                     src="https://via.placeholder.com/30"
//                     alt="User Avatar"
//                   />
//                   <span style={{ marginLeft: "10px" }}>{msg.text}</span>
//                 </>
//               )}
//             </Message>
//           ))}
//         </ChatBody>
//         <InputContainer>
//           <Input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Type a message..."
//           />
//           <Button onClick={handleSendMessage}>Send</Button>
//           <CancelButton onClick={handleCancelMessage}>Cancel</CancelButton>
//         </InputContainer>
//       </ChatContainer> */}
//       <ChatContainer isOpen={isOpen}>
//         <ChatHeader onClick={() => setIsOpen(!isOpen)}>
//           <p> Chat with Us</p> <IoClose style={{ fontSize: "25px" }} />
//         </ChatHeader>
//         <ChatBody ref={chatBodyRef}>
//           {messages.map((msg, index) => (
//             <Message
//               key={index}
//               sender={msg.sender} // Pass sender to styled component
//             >
//               {msg.sender === "bot" && (
//                 <Avatar
//                   src="https://via.placeholder.com/30"
//                   alt="User Avatar"
//                   style={{ marginRight: "10px" }}
//                 />
//               )}
//               <span>{msg.text}</span>
//             </Message>
//           ))}
//         </ChatBody>
//         <InputContainer>
//           <Input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Type a message..."
//           />
//           <Button onClick={handleSendMessage}>Send</Button>
//           <CancelButton onClick={handleCancelMessage}>Cancel</CancelButton>
//         </InputContainer>
//       </ChatContainer>
//     </>
//   );
// };

// export default Chatbox;

// Chatbox.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  max-height: 350px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
`;

const ChatHeader = styled.div`
  background-color: #007bff;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ChatBody = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  background-color: ${({ sender }) =>
    sender === "user" ? "#d1e7dd" : "#f1f1f1"};
  color: #333;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  max-width: 70%;
  align-self: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  margin-left: 3px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  width: 30px;
  background-color: #dc3545;
  &:hover {
    background-color: #c82333;
  }
`;

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputValue("");

      // Simulate bot reply
      setTimeout(() => {
        const botReply = generateBotReply(inputValue);
        setMessages((prevMessages) => [...prevMessages, botReply]);
      }, 1000);
    }
  };

  const handleClearMessages = () => {
    setMessages([]);
  };

  const generateBotReply = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();
    if (
      lowerCaseInput.includes("hello") ||
      lowerCaseInput.includes("hi") ||
      lowerCaseInput.includes("hey") ||
      lowerCaseInput.includes("watsup") ||
      lowerCaseInput.includes("Good") ||
      lowerCaseInput.includes("morning")
    ) {
      return { text: "Hello! How can I assist you today?", sender: "bot" };
    } else if (
      lowerCaseInput.includes("help") ||
      lowerCaseInput.includes("need") ||
      lowerCaseInput.includes("support") ||
      lowerCaseInput.includes("want") ||
      lowerCaseInput.includes("give")
    ) {
      return {
        text: "Sure, let me know what you need help or assistance with!",
        sender: "bot",
      };
    } else if (
      lowerCaseInput.includes("services") ||
      lowerCaseInput.includes("quote") ||
      lowerCaseInput.includes("service") ||
      lowerCaseInput.includes("need") ||
      lowerCaseInput.includes("want")
    ) {
      return {
        text: "We offer frontend development, backend development, fullstack development, and more. What do you need?",
        sender: "bot",
      };
    } else {
      return {
        text: "I'm not sure how to respond to that. Can you clarify?",
        sender: "bot",
      };
    }
  };

  useEffect(() => {
    const chatBody = document.querySelector("#chatBody");
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"}
      </ToggleButton>
      <ChatContainer isOpen={isOpen}>
        <ChatHeader>
          Chat
          <CancelButton onClick={() => setIsOpen(false)}>X</CancelButton>
        </ChatHeader>
        <ChatBody id="chatBody">
          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender}>
              {msg.sender === "bot" && <Avatar />}
              <span>{msg.text}</span>
            </Message>
          ))}
        </ChatBody>
        <InputContainer>
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message..."
          />
          <Button onClick={handleSendMessage}>Send</Button>
          <Button onClick={handleClearMessages}>Clear</Button>
        </InputContainer>
      </ChatContainer>
    </>
  );
};

export default Chatbox;
