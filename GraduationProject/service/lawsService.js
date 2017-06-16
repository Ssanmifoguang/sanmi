'use strict';

exports.list = (req,res,next) => {
    let sql = "select * from laws";
    util.getConn().queryAsync(sql).then((result) => {
        res.render("admin/lawslist.html",{lawss:result});
    }).catch((err) => {
        res.send("error");
    });
}

exports.show = (req,res,next) => {
    let sql = "select * from laws where id = ?";
    util.getConn().queryAsync(sql,[req.params.id]).then((result) => {
        res.render("admin/lawsshow.html",{lawss:result});
    }).catch((err) => {
        res.send("error");
    });
}

exports.add = (req,res,next) => {
    res.render("admin/lawsadd.html");
}

exports.doadd = (req,res,next) => {
    let sql = "insert into laws values(default,?,?,?,?,?)"
    util.getConn().queryAsync(sql,[req.body.titlec,req.body.titlef,req.body.titlee,req.body.titlep,req.body.time]).then(() => {
        res.json({code : 1});
    }).catch(() => {
        res.json({code : 0});
    });
}

exports.delete = (req,res,next) => {
    let sql = "delete from laws where id =?";
    util.getConn().queryAsync(sql,[req.body.id]).then((result) => {
       res.json({code:1}).end();
    }).catch((err) => {
       res.json({code:0}).end();
    });
}