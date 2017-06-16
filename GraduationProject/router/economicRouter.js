'use strict';

var ecnomicRouter = express.Router();
var ecnomicService = require(rootPath.concat("/service/economicService.js"));

ecnomicRouter.get("/list",ecnomicService.list);
ecnomicRouter.get("/show/:id",ecnomicService.show);
ecnomicRouter.get("/add",ecnomicService.add);
ecnomicRouter.post("/doadd",ecnomicService.doadd);
ecnomicRouter.post("/delete",ecnomicService.delete);
module.exports = ecnomicRouter;