import { Sequelize } from "sequelize";

const sequelize = new Sequelize("database", "username", "Aren123@#$", {
  host: "localhost",
  port: 5050,
  dialect: "postgres",
});
