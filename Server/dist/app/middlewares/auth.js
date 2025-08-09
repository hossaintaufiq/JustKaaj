"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (...roles) => {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization;
            if (!token) {
                throw new Error('You are not authorized!');
            }
            const verifiedUser = jsonwebtoken_1.default.verify(token, process.env.JWT_REFRESH_SECRET);
            req.user = verifiedUser;
            if (roles.length && !roles.includes(verifiedUser.role)) {
                throw new Error('Forbidden!');
            }
            next();
        }
        catch (err) {
            next(err);
        }
    };
};
exports.default = auth;
