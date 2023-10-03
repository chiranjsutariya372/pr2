const express = require('express')
const app = express()
app.use(express.json())
let initialTodo = [{title:"HTML",isCompleted:true,id:1},{title:"javascript",isCompleted:true,id:2},{title:"React",isCompleted:false,id:3}]
app.get('/',(req,res)=>{
    res.send("welcome")
})
app.get('/todos',(req,res)=>{
    res.send(initialTodo)
})
app.post('/addtodo',(req,res)=>{
    initialTodo.push({
        title:"css",
        isCompleted:true,
        id:4
    })
    res.send(initialTodo)
})
app.patch("/update/:id",(req,res)=>{
    let {id} = req.params
    let updateTodo = initialTodo.filter(todo=>todo.id == id)
    updateTodo[0].title=req.body.title
    updateTodo[0].isCompleted=req.body.isComplete
    res.send(initialTodo)
})
app.delete('/delete/:id',(req,res)=>{
    let {id}=req.params
    let findid=initialTodo.findIndex(todo=>todo.id==id)
    let deletetodo=initialTodo.splice(findid,1)[0]
    res.send(initialTodo,findid,deletetodo)
})
app.listen(8090,()=>{
    console.log("listening on port 8090");
})