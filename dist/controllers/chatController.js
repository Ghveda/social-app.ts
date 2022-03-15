"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatController = void 0;
const chat_service_1 = require("../service/chat.service");
const chatController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const chat = yield (0, chat_service_1.chatService)(body);
    if (chat.status) {
        res.status(chat.status).json(chat.error);
        return;
    }
    res.json(chat);
});
exports.chatController = chatController;
