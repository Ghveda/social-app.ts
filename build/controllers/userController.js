"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const register = (_, res) => {
    res.json("some register");
};
exports.register = register;
const login = (_, res) => {
    res.json("somee login");
};
exports.login = login;
