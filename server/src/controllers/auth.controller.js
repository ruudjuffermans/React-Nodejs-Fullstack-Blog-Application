import sequelize from "../database/index.js";
import {
  comparePassword,
  createAccessToken,
  createAccountToken,
  hashPassword,
  createRefreshToken,
  verifyToken,
} from "../utils/security.js";

import {
  sendActivateAccountMail,
  sendResetPasswordMail,
} from "../mail/sender.js";
import { timestampToExpDate } from "../utils/timeFormat.js";
import { Response } from "../utils/response.js";
import { ResponseCodes } from "../utils/responseCodes.js";

const db = sequelize.models;

async function getAllUsers(req, res) {
  const users = await db.user.findAll();
  res.send({ message: "Retrieved list of users", data: users });
}

async function register(req, res) {
  const { firstname, lastname, email, password } = req.body;

  await db.user.create({
    firstname,
    lastname,
    email,
    password: await hashPassword(password),
    status: "PENDING",
  });

  const emailVerificationToken = createAccountToken(email);
  await sendActivateAccountMail(email, firstname, emailVerificationToken.token);
  const response = new Response(
    200,
    "Registered Successfully!,\nCheck your email to activate your account!",
    {},
    ResponseCodes.REGISTER_SUCCESS
  );
  return response.send(res);
}

async function activateAccount(req, res) {
  const { email } = req.body;

  const user = await db.user.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    const response = new Response(404, "User with that email is not found!");
    return response.send(res);
  }

  if (user.status === "ACTIVE") {
    const response = new Response(200, "Your account is already active.");
    return response.send(res);
  }
  if (user.status === "DISABLED") {
    const response = new Response(
      200,
      "Your account is disabled, contact a admin to fix this."
    );
    return response.send(res);
  }
  if (user.status === "PENDING") {
    user.status = "ACTIVE";
    await user.save();
    const response = new Response(
      200,
      "Account is activated.",
      {},
      ResponseCodes.ACTIVATE_SUCCESS
    );
    return response.send(res);
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  const user = await db.user.findOne({
    where: { email },
  });

  if (!user) {
    const response = new Response(
      404,
      "A user with this email not registered."
    );
    return response.send(res);
  }

  if (user.status !== "ACTIVE") {
    const response = new Response(402, "Account is not active.");
    return response.send(res);
  }

  const passwordIsValid = await comparePassword(password, user.password);
  if (!passwordIsValid) {
    const response = new Response(402, "Invalid Password!");
    return response.send(res);
  }

  const access = await createAccessToken(user.id);
  const refresh = await createRefreshToken(user.id);

  const loginPayload = {
    user: { ...user.dataValues },
    refresh: refresh.token,
    access: access.token,
  };

  res.cookie("access", access.token, {
    httpOnly: false,
    secure: true,
    expires: timestampToExpDate(access.exp),
  });

  const response = new Response(
    200,
    "Successful login!",
    loginPayload,
    ResponseCodes.LOGIN_SUCCESS
  );
  return response.send(res);
}
async function logout(req, res) {
  res.clearCookie("access");
  const response = new Response(
    200,
    "Successful logout!",
    {},
    ResponseCodes.LOGOUT
  );
  return response.send(res);
}

async function refreshToken(req, res) {
  const { token } = req.body;

  const verified = await verifyToken(token);

  const access = await createAccessToken(verified.payload);

  const user = await db.user.findOne({
    where: { id: verified.payload },
  });

  const refreshPayload = {
    user: { ...user.dataValues },
    access: access.token,
  };

  res.cookie("access", access.token, {
    httpOnly: true,
    secure: true,
    expires: timestampToExpDate(access.exp),
  });

  const response = new Response(
    200,
    "Successful refresh!",
    refreshPayload,
    "REFRESH_TOKEN"
  );
  return response.send(res);
}

async function forgotPassword(req, res) {
  const { email } = req.body;
  const user = await db.user.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(404).send({
      message: "User with that email is not found!",
    });
  }

  const passwordReset = createPasswordResetToken(email);
  await sendResetPasswordMail(email, user.username, passwordReset.token);

  return res.send({
    message: "Password reset is initialised",
    message2: "Check your email to reset your account!",
    code: passwordReset.token,
    email,
    username: user.username,
  });
}

async function resetPassword(req, res) {
  const { code, email, newPassword } = req.body;

  const user = await db.user.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(404).send({
      message: "User with that email is not found!",
    });
  }

  user.password = await hashPassword(newPassword);
  await user.save();

  const response = new Response(200, "Your password has been changed");
  response.send(res);
}

const authController = {
  getAllUsers,
  register,
  login,
  logout,
  refreshToken,
  activateAccount,
  forgotPassword,
  resetPassword,
};

export default authController;
