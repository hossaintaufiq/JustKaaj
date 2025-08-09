"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../generated/prisma");
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler = (err, req, res, next) => {
    const statusCode = http_status_1.default.INTERNAL_SERVER_ERROR;
    const success = false;
    let message = err.message || 'Something went wrong!';
    let error = err;
    if (err instanceof prisma_1.Prisma.PrismaClientValidationError) {
        message = 'Validation Error';
        error = err.message;
    }
    else if (err instanceof prisma_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            message = 'Duplicate Key error';
            error = err.meta;
        }
    }
    res.status(statusCode).json({
        success,
        message,
        error,
    });
};
exports.default = globalErrorHandler;
