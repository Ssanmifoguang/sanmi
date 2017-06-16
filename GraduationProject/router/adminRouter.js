'use strict';

var adminRouter = express.Router();
var adminService = require(rootPath.concat("/service/adminService.js"));
// adminRouter.get("/index",(req,res,next) => {
//     res.sendFile(rootPath.concat("/views/admin/admin.html"));
// });
adminRouter.get("/index",adminService.index);
adminRouter.get("/list",adminService.list);
adminRouter.get("/add",adminService.add);
adminRouter.post("/add",util.upfile().single("upfile"),adminService.doAdd);
adminRouter.post("/delete",adminService.delete);
module.exports = adminRouter;