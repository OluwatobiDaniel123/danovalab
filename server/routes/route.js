import express from "express";

import {sendMessage, getMessages} from "../controller/chatController.js";
import {sendContactMail, sendQuoteMail} from "../controller/controller.js";

const routes = express.Router();

routes.route("/api/chat").post(sendMessage).get(getMessages);
routes.post("/api/send-contact-mail", sendContactMail);
routes.post("/api/send-quote-mail", sendQuoteMail);
export default routes;
