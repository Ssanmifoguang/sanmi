'use strict';

exports.list = (req,res,next) => {
    let sql = "select * from economic";
    util.getConn().queryAsync(sql).then((result) => {
        res.render("admin/economiclist.html",{economics:result});
    }).catch((err) => {
        res.send("error");
    });
}

exports.show = (req,res,next) => {
    let sql = "select * from economic where id = ?";
    util.getConn().queryAsync(sql,[req.params.id]).then((result) => {
        res.render("admin/economicshow.html",{economics:result});
    }).catch((err) => {
        res.send("error");
    });
}

exports.add = (req,res,next) => {
    res.render("admin/economicadd.html");
}

exports.doadd = (req,res,next) => {
    let sql = "insert into economic values(default,?,?,?,?,?,?,?,?,?)"
    util.getConn().queryAsync(sql,[req.body.titlec,req.body.titlef,req.body.titlee,req.body.titlep,
    req.body.contentc,req.body.contentf,req.body.contente,req.body.contentp,req.body.time]).then(() =>{
        res.json({code : 1}).end();
    }).catch(() => {
        res.json({code : 0}).end();
    });
}

exports.delete = (req,res,next) => {
    let sql = "delete from economic where id =?";
    util.getConn().queryAsync(sql,[req.body.id]).then((result) => {
       res.json({code:1}).end();
    }).catch((err) => {
       res.json({code:0}).end();
    });
}