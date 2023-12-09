import { DataTypes } from "sequelize";

export default (sequelize) => {
  const general = sequelize.define(
    "general",
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "general",
      timestamps: false,
    }
  );
  const address = sequelize.define(
    "address",
    {
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "address",
      timestamps: false,
    }
  );
  const profile = sequelize.define(
    "profile",
    {
      job: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: "profile",
      timestamps: false,
    }
  );

  const portrait = sequelize.define(
    "portrait",
    {
      url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "portrait",
      timestamps: false,
    }
  );

  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["ADMIN", "USER", "PREMIUM"],
        defaultValue: "USER",
      },
      status: {
        type: DataTypes.ENUM,
        values: ["ACTIVE", "PENDING", "DISABLED"],

        defaultValue: "ACTIVE",
      },
    },
    {
      tableName: "user",
      timestamps: false,
    }
  );

  User.hasOne(profile);
  User.hasOne(address);
  User.hasOne(portrait);
  User.hasOne(general);

  return User;
};
