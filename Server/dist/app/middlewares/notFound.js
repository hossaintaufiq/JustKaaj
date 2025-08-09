"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const notFound = (req, res, next) => {
    res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({
        success: false,
        messsage: 'API NOT FOUND',
        error: `The requested URL ${req.originalUrl} with method ${req.method} does not exist--😢😥`,
    });
};
exports.default = notFound;
