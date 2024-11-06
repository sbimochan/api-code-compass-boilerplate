import "./instrument";

import cors from "cors";
import path from "path";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import favicon from "serve-favicon";
import compression from "compression";
import * as Sentry from "@sentry/node";

import { config } from "./config";

import logger, { logStream } from "@utils/logger";

import json from "@middlewares/json";
import * as errorHandler from "@middlewares/errorHandler";

import routes from "@/routes";

const app = express();

const APP_PORT =
  ((config.app.env ?? "").toLowerCase() === "test"
    ? config.test.app.port
    : config.app.port) ?? "3000";
const APP_HOST = config.app.host ?? "0.0.0.0";

app.locals.title = config.app.name;
app.locals.version = config.app.version;

app.set("port", APP_PORT);
app.set("host", APP_HOST);

app.use(favicon(path.join(__dirname, "/../public", "favicon.ico")));

app.use(cors());
app.use(helmet());
app.use(compression());

app.use(morgan("tiny", { stream: logStream }));

app.use(express.json());
app.use(errorHandler.bodyParser);

app.use(json);

// API Routes
app.use("/api", routes);

// Error Middleware
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);

app.listen(app.get("port"), app.get("host"), () => {
  logger.info(
    `Server started at http://${app.get("host")}:${app.get("port")}/api`
  );
});

// Catch unhandled rejections
process.on("unhandledRejection", (err) => {
  logger.error("Unhandled rejection", err);

  try {
    Sentry.captureException(err);
  } catch (err) {
    logger.error("Sentry error", err);
  } finally {
    process.exit(1);
  }
});

// Catch uncaught exceptions
process.on("uncaughtException", (err) => {
  logger.error("Uncaught exception", err);

  try {
    Sentry.captureException(err);
  } catch (err) {
    logger.error("Sentry error", err);
  } finally {
    process.exit(1);
  }
});
