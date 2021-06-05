const express =require('express');

//导入cors模块
const cors = require('./middleware/cors');
//导入index router
const router = require('./routes/index');

const app = express();

app.use(express.json());
//以上放入入口文件中

app.use(cors);
app.use(router);

app.listen(3000, ()=> {
    console.log("server listening to port 3000");
});