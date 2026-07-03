import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME || process.env.DATABASE_NAME || "teori15_db";
const dbUser = process.env.DB_USER || "root";
const dbPass = process.env.DB_PASS || "12345";
const dbHost = process.env.DB_HOST || "localhost";
const dbPort = process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined;
const dbDialect = process.env.DB_DIALECT || "mysql";

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: dbDialect,
    logging: false,
  });
} else {
  sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    port: dbPort,
    dialect: dbDialect,
    logging: false,
  });
}

export default sequelize;
