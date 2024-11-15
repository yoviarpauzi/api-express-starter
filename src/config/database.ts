import { PrismaClient } from "@prisma/client";
import logger from "./logger";

const database = new PrismaClient({
  log: [
    {
      level: "info",
      emit: "event",
    },
    {
      level: "query",
      emit: "event",
    },
    {
      level: "error",
      emit: "event",
    },
  ],
});

database.$on("info", (e) => {
  logger.info(e);
});

database.$on("query", (e) => {
  logger.info(e);
});

database.$on("error", (e) => {
  logger.error(e);
});

export default database;
