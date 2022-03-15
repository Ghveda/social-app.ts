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
exports.login = exports.register = void 0;
const user_service_1 = require("../service/user.service");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const registerService = yield (0, user_service_1.registerUser)(body);
    if (registerService.status) {
        res.status(registerService.status).json(registerService.error);
        return;
    }
    res.json(registerService);
    return;
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const loginService = yield (0, user_service_1.loginUser)(body);
    if (loginService.status) {
        res.status(loginService.status).json(loginService.error);
        return;
    }
    res.json(loginService);
    return;
});
exports.login = login;