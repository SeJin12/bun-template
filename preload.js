import assert from "assert";
import logger from "./src/loaders/winston";
logger.info(`start preload...`);
logger.info(`환경 : ${Bun.env.ENV}`);

const mysqlCheck = true;
const redisCheck = true;

assert.ok(mysqlCheck, "MySQL. Connection refused. not connected");
assert.ok(redisCheck, "Redis. Connection refused. not connected");

logger.info(`PORT : ${Bun.env.serverPort}`);
logger.info(`end preload...`);