"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messageModel = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: String,
    },
});
const Message = (0, mongoose_1.model)("Message", messageModel);
exports.default = Message;
