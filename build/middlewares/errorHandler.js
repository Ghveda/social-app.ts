"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (_, res) => {
    const payload = {
        message: "Endpoit is incorrect",
    };
    res.json(payload);
};
exports.errorHandler = errorHandler;
