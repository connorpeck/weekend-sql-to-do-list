const express = require('express');
const tasksRouter = express.Router();
const pool = require('../modules/pool');

// let tasksList = [];

// GET
tasksRouter.get('/', (req,res)=>{
console.log('in /tasks GET');
const queryString = `SELECT * FROM tasks ORDER BY id ASC;`;
pool.query( queryString).then( (result)=>{
    res.send(result.rows);
}).catch( (err)=>{
console.log(err);
res.sendStatus(500);
})

})

// POST 
tasksRouter.post('/', (req, res)=> {
console.log('/tasks POST', req.body);
const queryString = `INSERT INTO tasks (task) VALUES ($1);`;
const values = [req.body.task];
pool.query( queryString, values).then( (result)=>{
    res.sendStatus(201);
}).catch( (err)=>{
console.log(err);
    res.sendStatus(500);
})
})

// DELETE
tasksRouter.delete('/', (req, res)=> {
    console.log('in /taks DELETE', req.query);
    const queryString = 'DELETE FROM tasks WHERE id=$1;'
    const values = [req.query.id];
    pool.query( queryString, values).then( (results)=>{
        res.sendStatus(200);
    }).catch(( err )=>{
        console.log(err);
        res.sendStatus(500);
    })
})

// PUT 
tasksRouter.put('/', (req, res)=>{
    console.log('in /tasks PUT', req.query);
    const queryString = `UPDATE tasks SET completed=true WHERE id=$1;`
    const values = [req.query.id];
    pool.query( queryString, values).then( (results)=>{
        res.sendStatus(200);
    }).catch( (err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

tasksRouter.put('/undo', (req, res)=>{
    console.log('in /tasks PUT', req.query);
    const queryString = `UPDATE tasks SET completed=false WHERE id=$1;`
    const values = [req.query.id];
    pool.query( queryString, values).then( (results)=>{
        res.sendStatus(200);
    }).catch( (err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})


module.exports = tasksRouter;