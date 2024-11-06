import dotenv from "dotenv";

/**
 * Initialize environment variables.
 */
dotenv.config();

export const config = {
  app: {
    name: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
    env: process.env.NODE_ENV
  },
  db: {
    client: process.env.DB_CLIENT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  sentry: {
    dsn: process.env.SENTRY_DSN
  },
  log: {
    dir: process.env.LOG_DIR ?? "logs",
    level: process.env.LOG_LEVEL ?? "info"
  },
  test: {
    app: {
      port: process.env.TEST_APP_PORT
    },
    db: {
      port: process.env.TEST_DB_PORT,
      host: process.env.TEST_DB_HOST,
      user: process.env.TEST_DB_USER,
      password: process.env.TEST_DB_PASSWORD,
      name: process.env.TEST_DB_NAME
    }
  }
};
