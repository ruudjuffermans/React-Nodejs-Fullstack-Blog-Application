import express from "express";
const router = express.Router();

import blogController from "../controllers/blog.controller.js";
import tryCatch from "../utils/tryCatchDecorator.js";

router.post("/", tryCatch(blogController.createBlog));
router.get("/all", tryCatch(blogController.getBlogs));
router.get("/:id", tryCatch(blogController.getBlogById));
router.delete("/:id", tryCatch(blogController.deleteBlog));
router.put("/:id", tryCatch(blogController.updateBlog));

export default router;
