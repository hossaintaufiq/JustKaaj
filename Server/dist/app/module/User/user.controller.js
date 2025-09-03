"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const user_service_1 = require("./user.service");
const createUser = (0, catchAsync_1.default)(async (req, res) => {
    const result = await user_service_1.UserService.createUserIntoDb(req);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'User created Successfully',
        data: result,
    });
});
const createAdmin = (0, catchAsync_1.default)(async (req, res) => {
    const result = await user_service_1.UserService.createAdminIntoDb(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: 'Admin Created Successfully',
        data: result,
    });
});
const createServicePorvider = (0, catchAsync_1.default)(async (req, res) => {
    const result = await user_service_1.UserService.createServiceProvider(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: 'Service Provider Created Successfully',
        data: result,
    });
});
const getMe = (0, catchAsync_1.default)(async (req, res) => {
    const result = await user_service_1.UserService.getMe(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'User fetched successfully',
        data: result,
    });
});
exports.UserController = {
    createUser,
    createAdmin,
    createServicePorvider,
    getMe,
};
