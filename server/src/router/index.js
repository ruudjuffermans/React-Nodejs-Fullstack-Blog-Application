import authRouter from "./auth.router.js";
import blogRouter from "./blog.router.js";
import express from "express";
const router = express.Router();

router.get("/health", (req, res) => {
  res.send({
    message: "healsthy",
  });
});

router.use(authRouter);
router.use("/blog", blogRouter);

export default router;
