const express = require('express');
const tasksRouter = express.Router();
// const pool = require('../modules/pool');

let tasksList = [];

// GET
tasksRouter.get('/', (req,res)=>{
console.log('in /tasks GET');
res.send(tasksList);
})

// POST 
tasksRouter.post('/', (req, res)=> {
console.log('/tasks POST', req.body);
tasksList.push(req.body);
res.sendStatus(200);
console.log('clg tasksList array', tasksList);

});



module.exports = tasksRouter;