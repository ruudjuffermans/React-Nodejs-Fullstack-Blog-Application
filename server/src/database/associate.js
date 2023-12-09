export default (sequelize) => {
  const { user, blog } = sequelize.models;

  blog.belongsTo(user, { as: "author" });
};
