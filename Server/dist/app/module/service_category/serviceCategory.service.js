"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryService = void 0;
const prisma_1 = require("../../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createServiceCategory = async (req) => {
    const data = req.body;
    const result = await prisma.service_Category.create({
        data: {
            ...data,
            parent_category: {
                connect: {
                    id: data.parent_category,
                },
            },
        },
    });
    return result;
};
exports.ServiceCategoryService = {
    createServiceCategory,
};
