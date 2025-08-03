import { Request } from 'express';
import { PrismaClient } from '../../../../generated/prisma';
const prisma = new PrismaClient();

const createParentCategory = async (req: Request) => {
  const result = await prisma.parent_category.create({
    data: req.body,
  });
  return result;
};

export const PCategoryService = {
  createParentCategory,
};
