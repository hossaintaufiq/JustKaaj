"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../../../../generated/prisma");
const config_1 = __importDefault(require("../../config"));
const prisma = new prisma_1.PrismaClient();
const userLogin = async (payload) => {
    const userData = await prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email,
            status: prisma_1.USER_STATUS.ACTIVE,
        },
    });
    const checkingPassword = await bcrypt_1.default.compare(payload.password, userData.password);
    if (!checkingPassword) {
        throw new Error('check your password');
    }
    const accessToken = await jsonwebtoken_1.default.sign({ id: userData.user_id, email: userData.email, role: userData.role }, config_1.default.jwt_access_token_secret, {
        expiresIn: '15d',
    });
    const refreshToken = jsonwebtoken_1.default.sign({ id: userData.user_id, email: userData.email, role: userData.role }, config_1.default.jwt_refresh_token_secret, {
        expiresIn: '30d',
    });
    return {
        accessToken,
        refreshToken,
    };
};
const refreshToken = async (token) => {
    let decoded;
    try {
        decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_refresh_token_secret);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (err) {
        throw new Error('You are not authorized');
    }
    const userData = prisma.user.findUniqueOrThrow({
        where: {
            email: decoded?.email,
            status: prisma_1.USER_STATUS.ACTIVE,
        },
    });
    const accessToken = await jsonwebtoken_1.default.sign({
        id: (await userData).user_id,
        email: (await userData).email,
        role: (await userData).role,
    }, config_1.default.jwt_access_token_secret, {
        expiresIn: '15d',
    });
    return {
        accessToken,
    };
};
exports.AuthService = {
    userLogin,
    refreshToken,
};
