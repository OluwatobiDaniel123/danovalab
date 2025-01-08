// import React, { useState } from "react";
// import Chatbot from "react-chatbot-kit";
// import "react-chatbot-kit/build/main.css";

// // Configuration for the chatbot
// const config = {
//   botName: "Danovalab",
//   initialMessages: [
//     {
//       id: "1",
//       message: "Hi there! How can I assist you today?",
//       type: "text",
//     },
//   ],
// };

// class MessageParser {
//   constructor(actionProvider) {
//     this.actionProvider = actionProvider;
//   }

//   parse(message) {
//     const lowerCaseMessage = message.toLowerCase();

//     if (lowerCaseMessage.includes("hello")) {
//       this.actionProvider.handleHello();
//     } else if (lowerCaseMessage.includes("help")) {
//       this.actionProvider.handleHelp();
//     } else if (lowerCaseMessage.includes("robotics")) {
//       this.actionProvider.handleRobotics();
//     } else if (
//       lowerCaseMessage.includes("thanks") ||
//       lowerCaseMessage.includes("thank you")
//     ) {
//       this.actionProvider.handleThanks();
//     } else {
//       this.actionProvider.handleDefault();
//     }
//   }
// }

// class ActionProvider {
//   constructor(createChatbotMessage, setStateFunc) {
//     this.createChatbotMessage = createChatbotMessage;
//     this.setState = setStateFunc;
//   }

//   handleHello = () => {
//     const message = this.createChatbotMessage("Hello! How can I assist you?");
//     this.setState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, message],
//     }));
//   };

//   handleHelp = () => {
//     const message = this.createChatbotMessage(
//       "Sure! I can assist you with topics like robotics, programming, or general queries."
//     );
//     this.setState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, message],
//     }));
//   };

//   handleRobotics = () => {
//     const message = this.createChatbotMessage(
//       "Robotics is a fascinating field! Are you interested in learning about sensors, actuators, or AI in robotics?"
//     );
//     this.setState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, message],
//     }));
//   };

//   handleThanks = () => {
//     const message = this.createChatbotMessage(
//       "You're welcome! Let me know if there's anything else I can help you with."
//     );
//     this.setState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, message],
//     }));
//   };

//   handleDefault = () => {
//     const message = this.createChatbotMessage(
//       "I'm sorry, I didn't understand that. Could you please rephrase?"
//     );
//     this.setState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, message],
//     }));
//   };
// }

// const Chatbox = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleChatbot = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <div>
//       {/* Toggle Button */}
//       <button
//         onClick={toggleChatbot}
//         style={{
//           position: "fixed",
//           bottom: "10px",
//           right: "10px",
//           zIndex: 1000,
//           backgroundColor: "#007bff",
//           color: "white",
//           border: "none",
//           borderRadius: "50%",
//           width: "60px",
//           height: "60px",
//           cursor: "pointer",
//           fontSize: "24px",
//         }}
//       >
//         {isOpen ? "×" : "💬"}
//       </button>

//       {/* Chatbot Container */}
//       {isOpen && (
//         <div
//           style={{
//             position: "fixed",
//             bottom: "80px",
//             right: "10px",
//             maxHeight: "500px",
//             backgroundColor: "white",
//             borderRadius: "10px",
//             boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
//             overflow: "hidden",
//             zIndex: 999,
//           }}
//         >
//           <Chatbot
//             config={config}
//             messageParser={MessageParser}
//             actionProvider={ActionProvider}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbox;

// import React, { useState } from "react";
// import Chatbot from "react-chatbot-kit";
// import "react-chatbot-kit/build/main.css";

// // Configuration for the chatbot
// const config = {
//   botName: "Danovalab",
//   initialMessages: [
//     {
//       id: "1",
//       message:
//         "Hi there! I’m here to assist you with your software development needs. What do you need help with today?",
//       type: "text",
//     },
//     {
//       id: "2",
//       message:
//         "You can type things like 'I need a new website' or 'I want help with SEO'.",
//       type: "text",
//     },
//   ],
// };

// // Services for the chatbot
// const services = [
//   "I need a brand new website",
//   "I want to redesign my current website",
//   "I want my website on Google First Page (SEO)",
//   "I want to setup an online store",
//   "I want to run Google Ads & Google Shopping",
//   "I need a new Logo Design",
//   "Point of Sale Software",
//   "Affiliate Marketing System",
//   "Inventory Software",
//   "Investment Website",
//   "Social & Digital Marketing",
//   "I need help with Website Maintenance and Hosting",
//   "Mobile & Web Apps",
//   "Other (Specify below)",
// ];

// // MessageParser Class
// class MessageParser {
//   constructor(actionProvider) {
//     this.actionProvider = actionProvider;
//   }

//   parse(message) {
//     const lowerCaseMessage = message.toLowerCase();

//     const matchedService = services.find((service) =>
//       lowerCaseMessage.includes(service.toLowerCase())
//     );

//     if (matchedService) {
//       this.actionProvider.handleServiceRequest(matchedService);
//     } else if (lowerCaseMessage.includes("hello")) {
//       this.actionProvider.handleHello();
//     } else {
//       this.actionProvider.handleDefault();
//     }
//   }
// }

// // ActionProvider Class
// class ActionProvider {
//   constructor(createChatbotMessage, setStateFunc, sendQuoteFunc) {
//     this.createChatbotMessage = createChatbotMessage;
//     this.setState = setStateFunc;
//     this.sendQuote = sendQuoteFunc;
//   }

//   handleHello = () => {
//     const message = this.createChatbotMessage("Hello! How can I assist you?");
//     this.setState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, message],
//     }));
//   };

//   handleServiceRequest = (service) => {
//     const message = this.createChatbotMessage(
//       `Great! You've selected: "${service}". Could you provide more details about your requirements?`
//     );
//     this.setState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, message],
//     }));
//   };

//   handleDefault = () => {
//     const message = this.createChatbotMessage(
//       "I'm sorry, I didn't understand that. Could you please rephrase or tell me which service you need?"
//     );
//     this.setState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, message],
//     }));
//   };

//   handleSubmitForm = () => {
//     const message = this.createChatbotMessage(
//       "Thank you! Submitting your request now."
//     );
//     this.setState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, message],
//     }));
//     this.sendQuote();
//   };
// }

// // Chatbox Component
// const Chatbox = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const sendQuote = (formData) => {
//     console.log("Submitting Quote Request:", formData);
//     // You can replace this with an actual API call
//   };

//   const toggleChatbot = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <div>
//       {/* Toggle Button */}
//       <button
//         onClick={toggleChatbot}
//         style={{
//           position: "fixed",
//           bottom: "10px",
//           right: "10px",
//           zIndex: 1000,
//           backgroundColor: "#007bff",
//           color: "white",
//           border: "none",
//           borderRadius: "50%",
//           width: "60px",
//           height: "60px",
//           cursor: "pointer",
//           fontSize: "24px",
//         }}
//       >
//         {isOpen ? "×" : "💬"}
//       </button>

//       {/* Chatbot */}
//       {isOpen && (
//         <div
//           style={{
//             position: "fixed",
//             bottom: "80px",
//             right: "10px",
//             maxHeight: "500px",
//             backgroundColor: "white",
//             borderRadius: "10px",
//             boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
//             overflow: "hidden",
//             zIndex: 999,
//           }}
//         >
//           <Chatbot
//             config={config}
//             messageParser={(actionProvider) =>
//               new MessageParser(actionProvider)
//             }
//             actionProvider={(setStateFunc) =>
//               new ActionProvider(
//                 (msg) => ({ type: "text", id: Date.now(), message: msg }),
//                 setStateFunc,
//                 sendQuote
//               )
//             }
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbox;

import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./Config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

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

      {/* Chatbot */}
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
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      )}
    </div>
  );
};

export default Chatbox;
