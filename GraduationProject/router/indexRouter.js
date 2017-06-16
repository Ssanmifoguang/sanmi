'use strict';

var indexRouter = express.Router();
var indexService = require(rootPath.concat("/service/indexService.js"));

indexRouter.get("/",indexService.index);

module.exports = indexRouter;