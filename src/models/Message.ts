import { Schema, model } from "mongoose";

const messageModel = new Schema({
  username: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: String,
  },
});

const Message = model("Message", messageModel);
export default Message;
