import bcrypt from "bcrypt";
import db from "../config/db.js";
import { hashToken } from "../utils/jwt.js";

export const findUserById = (id) => {
  return db.user.findUnique({
    where: {
      id,
    },
  });
};

export const findUserByempid = (empid) => {
  return db.user.findUnique({
    where: {
      empid,
    },
  });
};

export const findUserByusername = (username) => {
  db.user.findUnique({
    where: {
      username,
    },
  });
};

export const findUserByEmail = (email) => {
  return db.user.findUnique({
    where: {
      email,
    },
  });
};

export const createUser = (user) => {
  user.password = bcrypt.hashSync(user.password, 12);
  return db.user.create({
    data: user,
  });
};

export const addRefreshTokenToWhitelist = ({ jti, refreshToken, userId }) => {
  return db.refreshToken.create({
    data: {
      id: jti,
      hashedToken: hashToken(refreshToken),
      userId,
    },
  });
};

export const findRefreshTokenById = (id) => {
  return db.refreshToken.findUnique({
    where: {
      id,
    },
  });
};

export const deleteRefreshToken = (id) => {
  return db.refreshToken.update({
    where: {
      id,
    },
    data: {
      revoked: true,
    },
  });
};

export const revokeTokens = (userId) => {
  return db.refreshToken.updateMany({
    where: {
      userId,
    },
    data: {
      revoked: true,
    },
  });
};
