"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryRoute = void 0;
const express_1 = __importDefault(require("express"));
const serviceCategoty_controller_1 = require("./serviceCategoty.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const prisma_1 = require("../../../../generated/prisma");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const serviceCategory_validation_1 = require("./serviceCategory.validation");
const router = express_1.default.Router();
router.post('/create', (0, auth_1.default)(prisma_1.UserRole.ADMIN, prisma_1.UserRole.SUPER_ADMIN), (0, validateRequest_1.default)(serviceCategory_validation_1.ServiceCategoryValidation.createServiceCategorySchemaValidation), serviceCategoty_controller_1.ServiceCategoryController.createServiceCategory);
exports.ServiceCategoryRoute = router;
