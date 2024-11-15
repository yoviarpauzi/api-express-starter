import winston, { log } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = winston.configure({
  transports: [
    new winston.transports.DailyRotateFile({
      level: "info",
      filename: "application-%DATE%.log",
      datePattern: "YYYY-MM-DD-HH",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
});

export default logger;
