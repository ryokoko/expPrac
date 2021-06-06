
//PUT ENV VAR AT THE TOP
require('dotenv').config();


const express =require('express');

//导入cors模块
const cors = require('./middleware/cors');
//导入index router
const router = require('./routes/index');
const logger = require('./utils/logger');

const morgan = require('morgan');
/* const helmet = require('helmet'); */


const app = express();

//
/* const PORT = process.env.PORT || 3000;  */// 当前进程（process）的变量

app.use(express.json());
//以上放入入口文件中
/* app.use(helmet()); */
app.use(morgan(process.env.NODE_DEV === 'production'? 'common' : 'dev'))
app.use(cors);
app.use(router);

app.listen(3000, ()=> {
   logger.info(`server listening to port 3000`);
});