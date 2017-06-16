'use strict';

var userRouter = express.Router();
var userService = require(rootPath.concat("/service/userService.js"));
userRouter.get("/list",userService.list);
userRouter.get("/show",userService.show);
userRouter.post("/pass",userService.pass);
userRouter.post("/nopass",userService.nopass);
module.exports = userRouter;