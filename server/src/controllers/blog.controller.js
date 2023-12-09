import sequelize from "../database/index.js";

const db = sequelize.models;

async function createBlog(req, res) {
  return res.send({ message: "Blog created successfully" });
}

async function getBlogs(req, res) {
  return res.send({ message: "Retrieved list of blogs" });
}

async function getBlogById(req, res) {
  return res.send({ message: "Blog details retrieved" });
}

async function updateBlog(req, res) {
  return res.send({ message: "Blog updated successfully" });
}

async function deleteBlog(req, res) {
  return res.send({ message: "Blog deleted successfully" });
}

const blogController = {
  createBlog,
  getBlogById,
  getBlogs,
  deleteBlog,
  updateBlog,
};

export default blogController;
