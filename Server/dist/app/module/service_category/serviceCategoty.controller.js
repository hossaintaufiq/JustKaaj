"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const serviceCategory_service_1 = require("./serviceCategory.service");
const createServiceCategory = (0, catchAsync_1.default)(async (req, res) => {
    const result = await serviceCategory_service_1.ServiceCategoryService.createServiceCategory(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: 'Successfully created a Service Category',
        data: result,
    });
});
exports.ServiceCategoryController = {
    createServiceCategory,
};
