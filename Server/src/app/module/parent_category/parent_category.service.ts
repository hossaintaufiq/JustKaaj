import { Request } from 'express';
import { prisma } from '../../utils/prisma';

const createParentCategory = async (req: Request) => {
  const result = await prisma.parent_category.create({
    data: req.body,
  });
  return result;
};

const getAllParentCategory = async () => {
  const result = await prisma.parent_category.findMany();
  return result;
};

export const PCategoryService = {
  createParentCategory,
  getAllParentCategory,
};
