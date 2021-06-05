//全局的router，包含归纳了不同的routers

const express = require('express');

const tasksRouter = require('./task')
const router = express.Router();

router.use('/tasks', tasksRouter);

module.exports = router;