/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { PrismaClient } from '../../../../generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const createUserIntoDb = async (req: Request) => {
  const data = req.body;
  const { address, ...userData } = data;
  const hashedPassword = await bcrypt.hash(userData.password, 10);
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

const createAdminIntoDb = async (req: Request) => {
  const data = req.body;
  const { address, ...userData } = data;
  const hashedPassword = await bcrypt.hash(userData.password, 10);
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
const createServicePorvider = async (req: Request) => {
  const data = req.body;
  const hashedPassword = await bcrypt.hash(data.password, 10);
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

const getMe = async (req: Request) => {
  const user = (req as any).user;
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

export const UserService = {
  createUserIntoDb,
  createAdminIntoDb,
  createServicePorvider,
  getMe,
};
