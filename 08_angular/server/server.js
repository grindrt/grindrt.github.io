let express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8888;

let todoList = '';

fs.readFile(path.join(__dirname, './data/todo.json'), (err, data)=>{
    if(err) throw err;

    todoList = data;
    app.listen(8888, console.log('Server was started on port ' + port));
});

app.get('/todoList', function (req, res) {

	 var data = JSON.parse(fs.readFileSync(path.join(__dirname, './data/todo.json'), 'utf8'));
	 console.log('get todos');

	 console.log(data.length);
	res.send(data);

});