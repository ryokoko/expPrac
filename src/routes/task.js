//定义所有跟tasks相关的路径，叫task router
const express = require('express');
const { getAllTasks, getTaskById, addTask, updateTask, deleteTaskById } = require('../controllers/task');
const parseId = require('../middleware/parseId');
const checkTaskExist = require('../middleware/checkTaskExist');

const router = express.Router();

//已经在task路径下了，所以原来路径的‘/tasks’可以直接省略
router.get('', getAllTasks);
router.get('/:id', parseId, checkTaskExist, getTaskById);
router.post('', addTask);
router.put('/:id', parseId, checkTaskExist, updateTask);
router.delete('/:id', parseId, checkTaskExist, deleteTaskById);

//app.use('/tasks', middleware, m2, m3);

//导出
module.exports = router;