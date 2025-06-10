import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import App from "./App";
import "./index.css";
import Chatbot from "./components/articles/Chatbox/Chatbot";
import Whatsapp from "./components/articles/Chatbox/Whatsapp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <Whatsapp />
    <Chatbot />
  </div>
);
