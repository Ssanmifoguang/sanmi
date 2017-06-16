'use strict';

exports.list = (req,res,next) => {
    let sql = "select * from product";
    util.getConn().queryAsync(sql).then((result) => {
        res.render("admin/productlist.html",{products:result});
    }).catch((err) => {
        res.send("error");
    });
}

exports.add = (req,res,next) => {
    let sql = "select * from type";
     util.getConn().queryAsync(sql).then(result => {
        res.render("admin/productadd.html",{types:result});
    }).catch( err => {
        res.send("error");
    });
}

exports.doadd = (req,res,next) => {
    let sql = "insert into product values(default,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,0)";
    util.getConn().queryAsync(sql,[req.body.pnamec,req.body.pnamef,req.body.pnamee,req.body.pnamep,
    req.body.brandc,req.body.brandf,req.body.brande,req.body.brandp,req.body.price,req.body.hsnum,
    req.body.manufacturedc,req.body.manufacturedf,req.body.manufacturede,req.body.manufacturedp,
    req.body.paddressc,req.body.paddressf,req.body.paddresse,req.body.paddressp,
    req.body.pintroductionc,req.body.pintroductionf,req.body.pintroductione,req.body.pintroductionp,req.file.filename,req.body.tid]).then(() => {
        res.json({code:1});
    }).catch(err => {
        console.log(err);
        res.json({code:0});
    });
}

exports.look = (req,res,next) => {
    let sql = "select * from product";
     util.getConn().queryAsync(sql).then(result => {
        res.render("admin/productlook.html",{products:result});
    }).catch( err => {
        res.send("error");
    });
}

exports.show = (req,res,next) => {
    let sql = "select * from product where id = ?";
    util.getConn().queryAsync(sql,[req.params.id]).then(result => {
        res.render("admin/productshow.html",{products:result});
    }).catch( err => {
        res.send("error");
    });
}

exports.pass = (req,res,next) => {
    let sql = "update product set ispass = 2 where id = ?";
    util.getConn().queryAsync(sql,[req.body.id]).then((result) => {
       res.json({code:1}).end();
    }).catch((err) => {
       res.json({code:0}).end();
    });
}

exports.nopass = (req,res,next) => {
    let sql = "update product set ispass = 1 where id = ?";
    util.getConn().queryAsync(sql,[req.body.id]).then((result) => {
       res.json({code:1}).end();
    }).catch((err) => {
       res.json({code:0}).end();
    });
}

exports.delete = (req,res,next) => {
    let sql = "delete from product where id =?";
    util.getConn().queryAsync(sql,[req.body.id]).then((result) => {
       res.json({code:1}).end();
    }).catch((err) => {
       res.json({code:0}).end();
    });
}