"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const userLogin = (0, catchAsync_1.default)(async (req, res) => {
    const result = await auth_service_1.AuthService.userLogin(req.body);
    const { refreshToken } = result;
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
    });
    (0, sendResponse_1.default)(res, {
        data: {
            accessToken: result.accessToken,
        },
        message: 'Successfully logged in',
        statusCode: http_status_1.default.OK,
        success: true,
    });
});
const refreshToken = (0, catchAsync_1.default)(async (req, res) => {
    const cookie = req.cookies.refreshToken;
    const result = await auth_service_1.AuthService.refreshToken(cookie);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: 'Successfully logged in',
        statusCode: http_status_1.default.OK,
        success: true,
    });
});
exports.AuthController = {
    userLogin,
    refreshToken,
};
