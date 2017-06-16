'use strict';

exports.list = (req,res,next) => {
    let sql = "select * from user";
    util.getConn().queryAsync(sql).then((result) => {
        res.render("admin/userlist.html",{users:result});
    }).catch((err) => {
        res.send("error");
    });
}

exports.show = (req,res,next) => {
    let sql = "select * from user";
    util.getConn().queryAsync(sql).then((result) => {
        res.render("admin/usershow.html",{users:result});
    }).catch((err) => {
        res,send("error");
    });
}

exports.pass = (req,res,next) => {
    let sql = "update user set ispass = 1 where id = ?";
    util.getConn().queryAsync(sql,1).then((result) => {
       res.json({code:1}).end();
    }).catch((err) => {
       res.json({code:0}).end();
    });
}

exports.nopass = (req,res,next) => {
    let sql = "update user set ispass = 0 where id = ?";
    util.getConn().queryAsync(sql,1).then((result) => {
       res.json({code:1}).end();
    }).catch((err) => {
       res.json({code:0}).end();
    });
}