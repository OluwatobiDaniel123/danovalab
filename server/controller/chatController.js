import Chat from "../model/chatModel.js";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;

    let botResponse = "";
    let options = [];
    let paymentLink = null;

    if (message.toLowerCase().includes("hire")) {
      botResponse =
        "That's great! We'd love to work with you. Let's discuss the details of your project.";
      options = ["Schedule a Meeting", "View Our Portfolio", "Get a Quote"];
    } else if (message.toLowerCase().includes("schedule a meeting")) {
      botResponse =
        "You can schedule a meeting with us at your convenience. Here’s our booking link: https://danovalab.com";
    } else if (message.toLowerCase().includes("view our portfolio")) {
      botResponse =
        "Check out some of our past projects here: https://danovalab.com/Portfolio";
    } else if (message.toLowerCase().includes("get a quote")) {
      botResponse =
        "Please provide details about your project so we can give you an accurate quote.";
    } else if (message.toLowerCase().includes("thank you")) {
      botResponse =
        "You're very welcome! We appreciate your interest in Danovalab. Looking forward to working with you! 😊";
    } else {
      botResponse =
        "Welcome to Danovalab! We offer cutting-edge tech solutions. How can we assist you today?";
      options = ["Hire Us", "Learn More", "Contact Support"];
    }

    const userMessage = new Chat({ sender: "user", text: message });
    await userMessage.save();

    const botMessage = new Chat({
      sender: "bot",
      text: botResponse,
      options,
      link: paymentLink,
    });
    await botMessage.save();

    res.status(200).json({ response: botResponse, options, link: paymentLink });
  } catch (error) {
    console.error("Error processing message", error);
    res.status(500).json({ error: "Error processing message" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Chat.find().sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving messages" });
  }
};
