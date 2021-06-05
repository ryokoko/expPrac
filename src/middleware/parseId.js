

//转换id类型
module.exports = function parseId(req, res, next) {
    let { id } = req.params;
    req.params.id = Number(id); //对原本的数据进行修改
    // req.id 
    //req.locals.id
    next();
};