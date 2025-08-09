"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const service_service_1 = require("./service.service");
const createService = (0, catchAsync_1.default)(async (req, res) => {
    const result = await service_service_1.ServiceOfService.createServiceIntodb(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: 'Service Created Successfully',
        data: result,
    });
});
const getAllServices = (0, catchAsync_1.default)(async (req, res) => {
    const result = await service_service_1.ServiceOfService.getAllServicesFromDb();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Services Retrieved Successfully',
        data: result,
    });
});
const getServiceById = (0, catchAsync_1.default)(async (req, res) => {
    const serviceId = req.params.id;
    const result = await service_service_1.ServiceOfService.getServiceByIdFromDb(serviceId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Service Retrieved Successfully',
        data: result,
    });
});
exports.ServiceController = {
    createService,
    getAllServices,
    getServiceById,
};
