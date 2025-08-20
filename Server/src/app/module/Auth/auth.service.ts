import bcrypt from 'bcrypt';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { PrismaClient, User, USER_STATUS } from '../../../../generated/prisma';
import config from '../../config';

const prisma = new PrismaClient();

const userLogin = async (payload: User) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
      status: USER_STATUS.ACTIVE,
    },
  });
  const checkingPassword = await bcrypt.compare(
    payload.password,
    userData.password
  );
  if (!checkingPassword) {
    throw new Error('check your password');
  }
  const accessToken = await jwt.sign(
    { id: userData.user_id, email: userData.email, role: userData.role },
    config.jwt_access_token_secret as string,
    {
      expiresIn: '15d',
    }
  );
  const refreshToken = jwt.sign(
    { id: userData.user_id, email: userData.email, role: userData.role },
    config.jwt_refresh_token_secret as string,
    {
      expiresIn: '30d',
    }
  );
  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string) => {
  let decoded;
  try {
    decoded = jwt.verify(
      token,
      config.jwt_refresh_token_secret as Secret
    ) as JwtPayload;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    throw new Error('You are not authorized');
  }
  const userData = prisma.user.findUniqueOrThrow({
    where: {
      email: decoded?.email,
      status: USER_STATUS.ACTIVE,
    },
  });
  const accessToken = await jwt.sign(
    {
      id: (await userData).user_id,
      email: (await userData).email,
      role: (await userData).role,
    },
    config.jwt_access_token_secret as Secret,
    {
      expiresIn: '15d',
    }
  );
  return {
    accessToken,
  };
};

export const AuthService = {
  userLogin,
  refreshToken,
};
