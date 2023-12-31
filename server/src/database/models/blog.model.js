import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define(
    "blog",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      published: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: "blog",
      timestamps: true,
    }
  );
};
