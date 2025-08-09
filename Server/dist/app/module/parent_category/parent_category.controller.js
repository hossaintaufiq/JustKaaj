"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PCategoryController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const parent_category_service_1 = require("./parent_category.service");
const createParentCategory = (0, catchAsync_1.default)(async (req, res) => {
    const result = await parent_category_service_1.PCategoryService.createParentCategory(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Successfully created a parent Category',
        data: result,
        statusCode: http_status_1.default.CREATED,
    });
});
exports.PCategoryController = {
    createParentCategory,
};
