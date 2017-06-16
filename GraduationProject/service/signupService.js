'use strict';
exports.signup = (req,res,next) => {
    //执行sql 语句
    let sql = "insert into admin values(default,?,?)";
    util.getConn().queryAsync(sql,[req.body.name,req.body.password]).then((result) => {
        res.json({code : 1});
    }).catch(() => {
        res.json({code : 0});
    });
}