"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PCategoryService = void 0;
const prisma_1 = require("../../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createParentCategory = async (req) => {
    const result = await prisma.parent_category.create({
        data: req.body,
    });
    return result;
};
exports.PCategoryService = {
    createParentCategory,
};
