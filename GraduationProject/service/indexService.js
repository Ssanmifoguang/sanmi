'use strict';

exports.index = (req,res,next) => {
    let sq1 = "select * from type";
    let sq2 = "select * from product";

    var pro = [];
    pro.push(util.getConn().queryAsync(sq1));
    pro.push(util.getConn().queryAsync(sq2));
    Promise.all(pro).then(list => {
        res.render("index.html",{list:list});
    }).catch(err => {
        next(err);
    })
}