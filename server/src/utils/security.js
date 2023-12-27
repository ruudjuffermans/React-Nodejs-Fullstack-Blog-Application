import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config/index.js";

const salt = bcrypt.genSaltSync(10, "b");

export const hashPassword = (plainPassword) => {
  return bcrypt.hash(plainPassword, salt);
};

export const comparePassword = (plainPassword, hash) => {
  return bcrypt.compare(plainPassword, hash);
};

const signToken = (payload, expiresIn) => {
  const token = jwt.sign(payload, config.TOKEN_SECRET, { expiresIn });
  const { exp } = decodeToken(token);
  return { exp, token };
};

const createAccountToken = (payload) => {
  return signToken({ payload }, "45m");
};

const createPasswordResetToken = (payload) => {
  return signToken({ payload }, "15m");
};

const createAccessToken = (payload) => {
  return signToken({ payload }, "15m");
};

const createRefreshToken = (payload) => {
  return signToken({ payload }, "7d");
};

const decodeToken = (token) => {
  return jwt.decode(token, config.TOKEN_SECRET);
};

const verifyToken = (token) => {
  return jwt.verify(token, config.TOKEN_SECRET);
};

export {
  createAccountToken,
  decodeToken,
  verifyToken,
  createAccessToken,
  createPasswordResetToken,
  createRefreshToken,
};
