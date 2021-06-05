//导入task model，通过这个model对数据进行操作
const Task = require('../models/Task');



function getAllTasks(req, res) {
    const { description } = req.query;
    const tasks = Task.getAllTasks({ description }); //model负责对数据进行操作，controller只负责调用相应model来操作
    return res.json(tasks);
}

function getTaskById(req, res) {
    const { id } = req.params;
    const task = Task.getTaskById(id);
    return res.json(task);
}

function addTask(req, res) {
    const { description } = req.body;
    //should do some data validation, but will leave to future
    const task = Task.addTask({ description });
    return res.status(201).json(task);
}

function updateTask(req, res) {
    const { id } = req.params;
    const { description, done } = req.body;
    const task = Task.updateTask(id, { description, done });
    return res.json(task);
}

function deleteTaskById(req, res) {
    const { id } = req.params;
    Task.deleteTaskById(id);
    return res.sendStatus(204);
}

module.exports = {
    getAllTasks,
    getTaskById,
    addTask,
    updateTask,
    deleteTaskById
}