/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { PrismaClient, UserRole } from '../../../../generated/prisma';
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
      data: { ...userData, role: UserRole.ADMIN },
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
const createServiceProvider = async (req: Request) => {
  const data = req.body;

  // hash password only if new user is being created
  const hashedPassword = data.password
    ? await bcrypt.hash(data.password, 10)
    : null;

  const { address, ...providerData } = data;

  const userData = {
    email: data.email,
    password: hashedPassword as string,
    fullName: data.fullName,
    phone: data.phone,
    role: UserRole.SERVICE_PROVIDER,
  };

  // remove fields that should not go into provider table
  const keyToRemove = ['password', 'role', 'phone', 'agree'];
  keyToRemove.forEach((key) => delete providerData[key]);

  const result = await prisma.$transaction(async (trns) => {
    // check if user already exists (with relations)
    const existingUser = await trns.user.findUnique({
      where: { email: data.email },
      include: { address: true, service_provider: true },
    });

    let user;

    if (!existingUser) {
      // new user → create user + address
      user = await trns.user.create({
        data: userData,
      });

      await trns.address.create({
        data: {
          ...address,
          user_id: user.user_id,
        },
      });
    } else {
      // user already exists → upgrade role if not SERVICE_PROVIDER
      if (existingUser.role !== UserRole.SERVICE_PROVIDER) {
        user = await trns.user.update({
          where: { user_id: existingUser.user_id },
          data: {
            role: UserRole.SERVICE_PROVIDER,
          },
        });
      } else {
        user = existingUser; // just reuse
      }

      // create address only if missing
      if (!existingUser.address && address) {
        await trns.address.create({
          data: {
            ...address,
            user_id: existingUser.user_id,
          },
        });
      }
    }

    // check if service provider already exists
    let provider = await trns.service_Provider.findUnique({
      where: { email: user.email },
    });

    if (!provider) {
      provider = await trns.service_Provider.create({
        data: {
          ...providerData,
          email: user.email,
          fullName: user.fullName,
        },
      });
    } else {
      throw new Error('User is already registered as a service provider');
    }

    return {
      user,
      provider,
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
  createServiceProvider,
  getMe,
};
