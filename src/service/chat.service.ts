import Message from "../models/Message";
import { messageBody } from "../interface/messageInterface";

const chatService = async (body: messageBody) => {
  try {
    const { message, username } = body;
    const createMessage = await Message.create({
      username,
      message,
    });

    if (!createMessage) {
      return { status: 404, error: "ERROR_IN_CREATION_MESSAGE" };
    }
    // socket

    return { status: 201, message: "success" };
  } catch (error) {
    return { status: 404, error };
  }
};

export { chatService };