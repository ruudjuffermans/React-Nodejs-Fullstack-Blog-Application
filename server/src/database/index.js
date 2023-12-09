import Sequelize from "sequelize";
import config from "../config/index.js";
import associate from "./associate.js";
import models from "./models/index.js";
const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    logging: false,
    port: config.DB_PORT,
  }
);

for (const model of models) {
  model(sequelize);
}

associate(sequelize);

export const db = sequelize.models;

export default sequelize;
