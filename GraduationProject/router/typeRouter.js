'use strict';

var typeRouter = express.Router();
var typeService = require(rootPath.concat("/service/typeService.js"));

typeRouter.get("/list",typeService.list);
typeRouter.get("/add",typeService.add);
typeRouter.post("/doadd",typeService.doadd);

module.exports = typeRouter;