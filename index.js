/* /* const express =require('express');

const app = express();

app.use(express.json());


//如何拆分代码？ -> MVC （model， view， controller）
const tasks =[
    /* {
        id: 1,
        description: "create doc",
        done: true
    },
    {
        id:2,
        description:"print out doc",
        done: false
    } */
/*  ];
 let id=1;


 
app.use(cors); */

//利用exp对根路径进行监听
/* app.get('/', (req, res) => {
    res.send('hello');
}); */

/* app.get('/tasks',(req, res) =>{
    //res.send(tasks); // send会自动检测数据类型，如果可以转换成json就会转换
    res.json(tasks);
}); */

/*app.get('/tasks/:id', (req, res) => {
    const {id} = req.params; //string
    /* const task = tasks.find((i)=>i.id === Number(id));
    if (!task) {
        return res.sendStatus(404);
    }
    return res.json(task); 
});*/

/*app.get('/tasks', (req, res) => {
    const {description} = req.query;
    /* const task = tasks.find((t) => t.description === description);
        if (!task) {
            return res.sendStatus(404);
        }   
    res.json(description); */
    /* if (description) {
        const filteredTasks = tasks.filter((d) => 
        d.description.includes(description)
        );
        return res.json(filteredTasks);
    }
    return res.json(tasks); 
})*/

/*app.post('/tasks', (req, res) => {
    const { description } = req.body;
    /* const task = {description, id: id++, done: false};
    tasks.push(task); 
    res.send(task); 
})
/*app.put('/tasks/:id', (req, res) => {
    const {id} =req.params;
    const {description, done} = req.body;

    /* const task = tasks.find((i) => i.id === Number(id));
    if (!task) {
        return res.statusCode(404);
    }
    /* task = {id, description, done};
    tasks.push(task); */
    /* const newTask = {
        id: Number(id),
        description: description || task.description,
        done: !!done || task.done
    };
    const taskIndex = tasks.findIndex((i) => i.id === Number(id));
    tasks[taskIndex] = newTask;
    return res.json(newTask); 
})*/

/*app.delete('/tasks/:id', (req, res) => {
    const {id} = req.params;
    /* const taskIndex = tasks.findIndex((i) => i.id === Number(id));
    if (taskIndex === -1) {
        return res.sendStatus(404);
    }
    tasks.splice(taskIndex, 1);
    return res.sendStatus(204); 
}) */
/* app.listen(3000, ()=> {
    console.log("server listening to port 3000");
});

function cors(req, res, next) {
    /* res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    //options 在实际发送请求之前的一个confirm的操作
    res.setHeader('Access-Control-Allow-Headers', 'content-type'); */
/*     res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT, DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    next();
};
 */