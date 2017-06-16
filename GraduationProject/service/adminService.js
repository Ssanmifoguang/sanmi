'use strict';

exports.index = (req,res,next) => {
    res.render("admin/admin.html",{admin:req.session.admin});
}

exports.list = (req,res,next) => {
    util.getConn().queryAsync("select * from admin").then((result) => {
        res.render("admin/adminlist.html",{admins:result});
    }).catch((err) => {
        res.send("error");
    });
}

exports.add = (req,res,next) => {
    res.render("admin/add.html");
}

exports.doAdd = (req,res,next) => {
    let sql = "insert into admin values(default,?,?)";
    util.getConn().queryAsync(sql,[req.body.name,req.body.password]).then((result) => {
        res.json({code : 1}).end();
    }).catch((err) => {
        console.log(err.stack);
        res.json({code : 0}).end();
    });
}

exports.delete = (req,res,next) => {
    let sql = "delete from admin where id =?";
    util.getConn().queryAsync(sql,[req.body.id]).then((result) => {
       res.json({code:1}).end();
    }).catch((err) => {
       res.json({code:0}).end();
    });
}