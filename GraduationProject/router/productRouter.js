'use strict';

var productRouter = express.Router();
var productService = require(rootPath.concat("/service/productService.js"));

productRouter.get("/list",productService.list);
productRouter.get("/add",productService.add);
productRouter.get("/look",productService.look);
productRouter.get("/show/:id",productService.show);
productRouter.post("/pass",productService.pass);
productRouter.post("/nopass",productService.nopass);
productRouter.post("/delete",productService.delete);
productRouter.post("/doadd",util.upfile().single("img"),productService.doadd); 

module.exports = productRouter;