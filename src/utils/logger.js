import fs from "fs";
import winston, { format } from "winston";

import "winston-daily-rotate-file";

import { config } from "@/config";

// Use LOG_DIR from env
const LOG_DIR = config.log.dir;
const LOG_LEVEL = config.log.level;

// Create log directory if it does not exist
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR);
}

/**
 * Create a new winston logger.
 */
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: format.combine(format.colorize(), format.simple()),
      level: "info"
    }),
    new winston.transports.DailyRotateFile({
      format: format.combine(format.timestamp(), format.json()),
      maxFiles: "14d",
      level: LOG_LEVEL,
      dirname: LOG_DIR,
      datePattern: "YYYY-MM-DD",
      filename: "%DATE%-debug.log"
    })
  ]
});

export const logStream = {
  /**
   * A writable stream for winston logger.
   *
   * @param {any} message
   */
  write(message) {
    logger.info(message.toString());
  }
};

export default logger;
