"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const prisma_1 = require("../../../../generated/prisma");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.post('/create-user', (0, validateRequest_1.default)(user_validation_1.UserValidation.createUserSchemaValidation), user_controller_1.UserController.createUser);
router.post('/create-admin', (0, auth_1.default)(prisma_1.UserRole.SUPER_ADMIN), (0, validateRequest_1.default)(user_validation_1.UserValidation.createAdminSchemaValidation), user_controller_1.UserController.createAdmin);
router.post('/create-provider', (0, validateRequest_1.default)(user_validation_1.UserValidation.createServiceProviderSchema), user_controller_1.UserController.createServicePorvider);
router.get('/getMe', (0, auth_1.default)(prisma_1.UserRole.SERVICE_PROVIDER, prisma_1.UserRole.USER, prisma_1.UserRole.ADMIN), user_controller_1.UserController.getMe);
exports.UserRoute = router;
