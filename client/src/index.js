import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import App from "./App";
import "./index.css";
import Chatbot from "../src/components/Chatbox/Chatbot";
import Whatsapp from "../src/components/Chatbox/Whatsapp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <Whatsapp />
    <Chatbot />
  </div>
);
