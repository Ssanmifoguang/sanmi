'use strict';

exports.list = (req,res,next) => {
    let sql = "select * from type";
    util.getConn().queryAsync(sql).then((result) => {
        res.render("admin/typelist.html",{types:result});
    }).catch((err) => {
        res.send("error");
    });
}

exports.add = (req,res,next) => {
    res.render("admin/typeadd.html");
}

exports.doadd = (req,res,next) => {
    let sql = "insert into type values(default,?,?,?,?)";
    util.getConn().queryAsync(sql,[req.body.typenamec,req.body.typenamef,req.body.typenamee,req.body.typenamep]).then(() => {
        res.json({code : 1});
    }).catch(() => {
        res.json({code : 0});
    });
}