const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5001;
const tasksRouter = require('./routes/tasks');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./server/public'));
app.use('/tasks', tasksRouter);


app.listen(port, ()=>{
    console.log('listening on port:', port);
});