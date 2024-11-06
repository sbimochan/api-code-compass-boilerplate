import { config } from "./config";

// Default configuration for database connection
let connection = {
  port: config.db.port,
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.name,
  charset: "utf8",
  timezone: "UTC"
};

// For test environment
if ((config.app.env ?? "").toLowerCase() === "test") {
  connection = {
    ...connection,
    port: config.test.db.port,
    host: config.test.db.host,
    user: config.test.db.user,
    password: config.test.db.password,
    database: config.test.db.name
  };
}

/**
 * Database configuration.
 */
export default {
  connection,
  client: config.db.client,
  migrations: {
    tableName: "migrations",
    directory: "./migrations",
    stub: "./stubs/migration.stub"
  },
  seeds: {
    directory: "./seeds",
    stub: "./stubs/seed.stub"
  }
};
