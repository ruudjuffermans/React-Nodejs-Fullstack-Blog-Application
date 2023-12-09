import sequelize from "../database/index.js";

const db = sequelize.models;

function test() {
  console.log("test decorator");
}

async function register(req, res) {
  return res.send({ message: "User registered successfully" });
}
async function activateAccount(req, res) {
  return res.send({ message: "Account activated successfully" });
}
async function login(req, res) {
  return res.send({ message: "User logged in successfully" });
}
async function logout(req, res) {
  return res.send({ message: "User logged out successfully" });
}
async function refreshToken(req, res) {
  return res.send({ message: "Refresh token provided successfully" });
}
async function forgotPassword(req, res) {
  return res.send({ message: "Password reset link sent successfully" });
}
async function resetPassword(req, res) {
  return res.send({ message: "Password reset successfully" });
}

const authController = {
  register,
  login,
  logout,
  refreshToken,
  activateAccount,
  forgotPassword,
  resetPassword,
};

export default authController;
