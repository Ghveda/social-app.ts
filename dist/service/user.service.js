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
exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const User_1 = __importDefault(require("../models/User"));
const constants_1 = require("../constants");
const registerUser = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = body;
        const salt = yield (0, bcryptjs_1.genSalt)(10);
        const hashedPassword = yield (0, bcryptjs_1.hash)(password, salt);
        const user = yield User_1.default.findOne({ email });
        if (user) {
            return { status: 404, error: "EMAIL_EXISTS" };
        }
        const createUser = yield User_1.default.create({
            username,
            email,
            password: hashedPassword,
        });
        const token = (0, jsonwebtoken_1.sign)({ id: createUser._id }, constants_1.JWT_SECRET, {
            expiresIn: "1d",
        });
        return {
            username,
            token,
        };
    }
    catch (error) {
        return { status: 404, error };
    }
});
exports.registerUser = registerUser;
const loginUser = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = body;
        const user = yield User_1.default.findOne({ email });
        if (!user) {
            return { status: 404, error: "Email or password is incorrect" };
        }
        const comparePassword = yield (0, bcryptjs_1.compare)(password, user.password);
        if (!comparePassword) {
            return { status: 404, error: "Email or password is incorrect" };
        }
        const token = (0, jsonwebtoken_1.sign)({ id: user._id }, constants_1.JWT_SECRET, {
            expiresIn: "1d",
        });
        return { username: user.username, token };
    }
    catch (error) {
        return { status: 404, error };
    }
});
exports.loginUser = loginUser;
