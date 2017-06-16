'use strict';

exports.list = (req,res,next) => {
    let sql = "select * from exihibition";
    util.getConn().queryAsync(sql).then((result) => {
        res.render("admin/exihibitionlist.html",{exihibitions:result});
    }).catch((err) => {
        res.send("error");
    });
}

exports.show = (req,res,next) => {
    let sql = "select * from exihibition where id = ?";
    util.getConn().queryAsync(sql,[req.params.id]).then((result) => {
        res.render("admin/exihibitionshow.html",{exihibitions:result});
    }).catch((err) => {
        res.send("error");
    });
    
}

exports.add = (req,res,next) => {
    res.render("admin/exihibitionadd.html");
}

exports.doadd = (req,res,next) => {
    let sql = "insert into exihibition values(default,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    util.getConn().queryAsync(sql,[req.body.exihibitionnamec,req.body.exihibitionnamef,req.body.exihibitionnamee,req.body.exihibitionnamep,
    req.body.exihibitiontypec,req.body.exihibitiontypef,req.body.exihibitiontypee,req.body.exihibitiontypep,
    req.body.addressc,req.body.addressf,req.body.addresse,req.body.addressp,
    req.body.introducec,req.body.introducef,req.body.introducee,req.body.introducep,
    req.body.organizerc,req.body.organizerf,req.body.organizere,req.body.organizerp,req.body.time]).then(() => {
        res.json({code : 1});
    }).catch(() => {
        res.json({code : 0});
    });
}

exports.delete = (req,res,next) => {
    let sql = "delete from exihibition where id =?";
    util.getConn().queryAsync(sql,[req.body.id]).then((result) => {
       res.json({code:1}).end();
    }).catch((err) => {
       res.json({code:0}).end();
    });
}