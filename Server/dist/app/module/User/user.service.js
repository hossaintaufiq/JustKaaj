"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = require("../../../../generated/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new prisma_1.PrismaClient();
const createUserIntoDb = async (req) => {
    const data = req.body;
    const { address, ...userData } = data;
    const hashedPassword = await bcrypt_1.default.hash(userData.password, 10);
    userData.password = hashedPassword;
    const result = prisma.$transaction(async (trns) => {
        const user = await trns.user.create({
            data: userData,
        });
        const setAddress = await trns.address.create({
            data: {
                ...address,
                user_id: user.user_id,
            },
        });
        return {
            user,
            setAddress,
        };
    });
    return result;
};
const createAdminIntoDb = async (req) => {
    const data = req.body;
    const { address, ...userData } = data;
    const hashedPassword = await bcrypt_1.default.hash(userData.password, 10);
    userData.password = hashedPassword;
    const adminData = {
        email: userData.email,
        fullName: userData.fullName,
    };
    const result = prisma.$transaction(async (trns) => {
        const user = await trns.user.create({
            data: userData,
        });
        const setAddress = await trns.address.create({
            data: {
                ...address,
                user_id: user.user_id,
            },
        });
        const admin = await trns.admin.create({
            data: adminData,
        });
        return {
            user,
            setAddress,
            admin,
        };
    });
    return result;
};
const createServicePorvider = async (req) => {
    const data = req.body;
    const hashedPassword = await bcrypt_1.default.hash(data.password, 10);
    const { address, ...providerData } = data;
    const userData = {
        email: data.email,
        password: hashedPassword,
        fullName: data.fullName,
        phone: data.phone,
        role: data.role,
    };
    const keyToRemove = ['password', 'role', 'phone'];
    keyToRemove.forEach((key) => delete providerData[key]);
    const result = await prisma.$transaction(async (trns) => {
        const createUser = await trns.user.create({
            data: userData,
        });
        const setAddress = await trns.address.create({
            data: {
                ...address,
                user_id: createUser.user_id,
            },
        });
        const createProvider = await trns.service_Provider.create({
            data: providerData,
        });
        return {
            createUser,
            setAddress,
            createProvider,
        };
    });
    return result;
};
const getMe = async (req) => {
    const user = req.user;
    const result = await prisma.user.findUnique({
        where: { user_id: user.id },
        include: {
            address: true,
            service_provider: true,
            Admin: true,
        },
    });
    if (!result) {
        throw new Error('User not found');
    }
    return result;
};
exports.UserService = {
    createUserIntoDb,
    createAdminIntoDb,
    createServicePorvider,
    getMe,
};
