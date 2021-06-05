// A class
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
 ];
 let id=1;


 //Get all tasks
 function getAllTasks({ description }){
     if (description) {
         const filteredTasks = tasks.filter((d) => d.description.includes(description));
         return filteredTasks;
     }
     return tasks;
 }

 //Get task by ID
 function getTaskById (id){
     /* const task = tasks.find((i) => {
         i.id === (id);
     }); 
     return task */
     return tasks.find((i) => i.id === id);
 }

//Add task
 function addTask({ description }) {
    const task = { description, id: id++, done: false};
    tasks.push(task);
    return task;
}

 //Update task
 function updateTask (id, {description, done}) {
     const task = getTaskById(id);

     if (done !== undefined) {
         task.done = !!done; //done的值取决于真正update成什么样的值（True or False，打钩还是未打钩）
     }
     if (description) {
         task.description = description;
     }
     return task;
 }

//Delete Task
function deleteTaskById (id) {
    const taskIndex = getTaskIndexById(id);
    tasks.splice(taskIndex, 1);
}


//helper function, 不做对外导出
function getTaskIndexById(id) {
    return tasks.findIndex((i) => i.id === id);
}

//导出tasks functions
module.exports = {
    getAllTasks, getTaskById, updateTask, deleteTaskById, addTask
}