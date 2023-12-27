import sequelize from "../database/index.js";

const db = sequelize.models;

async function createBlog(req, res) {
  const { content, title } = req.body;

  const blog = await db.blog.create({
    title,
    content,
  });
  res.send({ message: "Blog Created", data: blog });
}

async function getAllBlogs(req, res) {
  const blogs = await db.blog.findAll();
  res.send({ message: "Retrieved list of blogs", data: blogs });
}

async function getBlogById(req, res) {
  const { id } = req.params;
  const blog = await db.blog.findOne({
    where: {
      id,
    },
  });
  res.send({ message: "Blog details retrieved", data: blog });
}

async function updateBlog(req, res) {
  const { id } = req.params;
  const { content, title } = req.body;

  const [updated] = await db.blog.update(
    {
      title,
      content,
    },
    {
      where: { id },
    }
  );

  if (updated) {
    const updatedBlog = await db.blog.findOne({ where: { id } });
    res.send({ message: "Blog updated successfully", data: updatedBlog });
  } else {
    res.status(404).send({ message: "Blog not found" });
  }
}

async function deleteBlog(req, res) {
  const { id } = req.params;

  const deleted = await db.blog.destroy({
    where: { id },
  });

  if (deleted) {
    res.send({ message: "Blog deleted successfully" });
  } else {
    res.status(404).send({ message: "Blog not found" });
  }
}

const blogController = {
  createBlog,
  getBlogById,
  getAllBlogs,
  deleteBlog,
  updateBlog,
};

export default blogController;
