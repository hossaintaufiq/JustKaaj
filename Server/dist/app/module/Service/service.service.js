"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOfService = void 0;
const prisma_1 = require("../../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createServiceIntodb = async (req) => {
    const { category, ...serviceData } = req.body;
    const user = req.user;
    const result = await prisma.$transaction(async (trns) => {
        const createService = await trns.service.create({
            data: serviceData,
        });
        const setProvider = await trns.providerServices.create({
            data: {
                providerId: user.id,
                serviceId: createService.id,
            },
        });
        const setCategory = await category.map((catId) => trns.service_Category.update({
            where: { id: catId },
            data: { service_id: createService.id },
        }));
        return {
            setProvider,
            createService,
            setCategory,
        };
    });
    return result;
};
const getAllServicesFromDb = async () => {
    const result = await prisma.service.findMany({
        include: {
            providerServices: true,
            category: true,
        },
    });
    return result;
};
const getServiceByIdFromDb = async (serviceId) => {
    const result = await prisma.service.findUnique({
        where: { id: serviceId },
        include: {
            providerServices: true,
            category: true,
        },
    });
    return result;
};
exports.ServiceOfService = {
    createServiceIntodb,
    getAllServicesFromDb,
    getServiceByIdFromDb,
};
