'use strict';

exports.checklogin = (req,res,next) => {
     if(!req.session.admin){
        return res.redirect("/login.html");
    }
    next();
}
var mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
exports.getConn = () => {
    //连接数据库
    var connection = mysql.createConnection({
        host :  '127.0.0.1',
        user : 'root',
        password : 'root',
        database : 'epay'
    });
    return connection;
}

//配置文件上传
var multer = require("multer");
exports.upfile = () => {
    var storage = multer.diskStorage({
        //设置上传后文件路径，upload文件夹会自动创立
        destination : function(req,file,cb){
            cb(null,'./public/uploads');
        },

        //给上传文件重命名，获取添加后缀名
        filename : function(req,file,cb){
            var fileFormat = (file.originalname).split(".");
            cb(null,file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1]);
        }
    });

    return multer({
        storage : storage,
        limits : {}
    })
}