'use strict';
exports.login = (req,res,next) => {
    //执行sql 语句
    let sql = "select * from admin where name = ? and password = ?";
    util.getConn().queryAsync(sql,[req.body.username,req.body.password]).then((result) => {
        if(result.length != 0){
            req.session.admin = result[0];
            res.send("ok");
        }else{
            res.send("error");
        }
    });
}

exports.logout = (req,res,next) => {
    delete req.session.admin;
    res.redirect("/admin/login.html");
}