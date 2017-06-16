'use strict';

var lawsRouter = express.Router();
var lawsService = require(rootPath.concat("/service/lawsService.js"));

lawsRouter.get("/list",lawsService.list);
lawsRouter.get("/show/:id",lawsService.show);
lawsRouter.get("/add",lawsService.add);
lawsRouter.post("/doadd",lawsService.doadd);
lawsRouter.post("/delete",lawsService.delete);

module.exports = lawsRouter;