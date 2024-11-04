import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("Formulario", "root", "12345", {
  host: "localhost",
  dialect: "mysql",
  port: 3308,
  logging: false,
});
