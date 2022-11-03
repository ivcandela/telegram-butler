import * as dotenv from "dotenv";
dotenv.config();

import { post } from "./telegram.js";

let apiToken = process.env.TELEGRAM_BOT_API_KEY;
let chatId = process.env.TELEGRAM_BOT_USERNAME;
let disablePreview = true;
let title = "HELLO BOT!";
let content = `Test Content`;

(async () => {
  try {
    const message = await post(
      apiToken,
      chatId,
      title,
      content,
      disablePreview
    );
    console.log("Message: ", message);
  } catch (error) {
    console.error("err!", error);
  }
})();

/*

Message:  {
  ok: true,
  result: {
    message_id: 14,
    sender_chat: {
      id: -100************,
      title: 'Chat title',
      username: 'chat_username',
      type: 'channel'
    },
    chat: {
      id: -100************,
      title: 'Chat title',
      username: 'chat_username',
      type: 'channel'
    },
    date: 1667465806,
    text: 'Test Content',
    entities: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ]
  }
}

*/
