'use strict';

var loginRouter = express.Router();
var loginService = require(rootPath.concat("/service/loginService.js"));
loginRouter.post("/",loginService.login);
loginRouter.get("/logout",loginService.logout);
module.exports = loginRouter;