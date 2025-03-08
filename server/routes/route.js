import express from "express";

import { sendMessage, getMessages } from "../controller/chatController.js";

const routes = express.Router();

routes.route("/api/chat").post(sendMessage).get(getMessages);

export default routes;
