import { Request } from 'express';
import { PrismaClient } from '../../../../generated/prisma';
const prisma = new PrismaClient();

const createServiceCategory = async (req: Request) => {
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

export const ServiceCategoryService = {
  createServiceCategory,
};
