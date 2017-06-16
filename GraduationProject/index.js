"use strict";
global.rootPath = __dirname;
global.Promise = require("bluebird");
global.util = require("./util.js");
global.express = require("express");

var ueditor = require("ueditor");
var path = require("path");
var ejs = require("ejs");
var bodyparse = require("body-parser");
var  session = require("express-session");
var app = express();

//静态文件中间件
app.use(express.static('public'));

//配置post body解析中间件
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:true}));

//配置session
app.use(session({
    secret:'!@#$',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:1000*60*120}
}));

//配置ejs模板
app.set("views","./views");
app.set('views engine','html');
app.engine('.html',ejs.__express);

//挂载路由
app.use("/login",require("./router/loginRouter.js"));
app.use("/admin",util.checklogin,require("./router/adminRouter.js"));
app.use("/user",util.checklogin,require("./router/userRouter.js"));
app.use("/type",util.checklogin,require("./router/typeRouter.js"));
app.use("/product",util.checklogin,require("./router/productRouter.js"));
app.use("/exihibition",util.checklogin,require("./router/exihibitionRouter.js"));
app.use("/economic",util.checklogin,require("./router/economicRouter.js"));
app.use("/laws",util.checklogin,require("./router/lawsRouter.js"));
app.use("/index",require("./router/indexRouter.js"));

//404错误中间件
app.use((req,res,next)=>{
    if(req.xhr){
        res.sendStatus(404);
    }else{
        res.status(302).set("Location","/404.html").end();
    }
});
//服务器内部错误中间件
app.use((err,req,res,next)=>{
    console.log(err.stack);
    if(req.xhr){
        res.sendStatus(500);
    }else{
        res.status(302).set("Location","/500.html").end();
    }
});
//未捕获的异常
process.on("uncaughtException",(err)=>{
    console.log('Caught Exception: ${err}');
});

app.listen(3000,() => console.log("服务器开启成功!"));