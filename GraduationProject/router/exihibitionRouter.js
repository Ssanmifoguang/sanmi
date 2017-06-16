'use strict';

var exihibitionRouter = express.Router();
var exihibitionService = require(rootPath.concat("/service/exihibitionService.js"));

exihibitionRouter.get("/list",exihibitionService.list);
exihibitionRouter.get("/show/:id",exihibitionService.show);
exihibitionRouter.get("/add",exihibitionService.add);
exihibitionRouter.post("/doadd",exihibitionService.doadd);
exihibitionRouter.post("/delete",exihibitionService.delete);

module.exports = exihibitionRouter;