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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatService = void 0;
const Message_1 = __importDefault(require("../models/Message"));
const chatService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { message, username } = body;
        const createMessage = yield Message_1.default.create({
            username,
            message,
        });
        if (!createMessage) {
            return { status: 404, error: "ERROR_IN_CREATION_MESSAGE" };
        }
        // socket
        return { status: 201, message: "success" };
    }
    catch (error) {
        return { status: 404, error };
    }
});
exports.chatService = chatService;
