import Home from "./home";
import User from "./user";

// API 엔드포인트 설정
export default (app) => {
  app.use(Home);
  app.use(User);

  return app;
};
