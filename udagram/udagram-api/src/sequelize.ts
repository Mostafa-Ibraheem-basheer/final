import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
  "postgres://postgres:atabase-1.caw1ygi7mnu0.us-east-1.rds.amazonaws.com:5432/postgres"
);
