import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routers/index";
import morganMiddleware from "./loaders/morgan";
import logger from "./loaders/winston";
import errorHandler from "./handlers/error-handler";

global.LOG = (msg) => logger.info(msg);

const app = express();
const port = Bun.env.serverPort; // .env

// 미들웨어 설정
app.set('view engine', 'ejs');
app.use(bodyParser.json()); // request body => json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json({ limit: "16mb" }));
app.use(morganMiddleware);

router(app);

app.use(errorHandler);

// 서버 시작
app.listen(port, () => {
  logger.info(`API 서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
