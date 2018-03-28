let express = require('express');
let fs = require('fs');
let path = require('path');

const app = express();
const port = 8080;
const dataPath = './data/TEST_DATA.json';

app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9090');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	// Pass to next layer of middleware
	next();
});
app.listen(port, console.log('Server was started on port ' + port));

app.get('/articles', function (req, res) {
	var data = JSON.parse(fs.readFileSync(path.join(__dirname, dataPath), 'utf8'));
	res.send(data);
});