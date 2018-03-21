let express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8888;

let todoList = '';

fs.readFile(path.join(__dirname, '../data/todo.json'), (err, data)=>{
    if(err) throw err;

    todoList = data;
    app.listen(8888, console.log('Server was started on port ' + port));
});

app.get('/todoList', (req, res) => res.send(todoList));