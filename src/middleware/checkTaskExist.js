const { getTaskById } = require('../models/Task');


module.exports = function checkTaskExist(req, res, next) {
    const { id } = req.params;
    const task = getTaskById(id);

    if (!task) {
        return res.sendStatus(404);
    }

    next();
}