"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
router.post('/login', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.authValidationSchema), auth_controller_1.AuthController.userLogin);
router.post('/refresh-token', auth_controller_1.AuthController.refreshToken);
exports.AuthRoute = router;
