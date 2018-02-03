const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9999;

const logger = require('./logger.js');

app.use(bodyParser.urlencoded({ extended: true }));
require('./routes/server_route.js')(app, {});

app.set('views', './src/views');
app.set('view engine', 'pug');

app.use((req, res)=>{
	logger.log({
		level: 'error',
		message: 'Lost page'
	})
	res.render('default', {title: 'Sorry', message: 'This page was lost.'})
});

app.listen(port, () => {
	logger.log({
		level: 'info',
		message:'Hey there! You are on port 9999'
	});
});

const logErrors = (err, req, res, next)=>{
	console.log(err.stack);
	logger.log({ level: 'error', message: 'Internal server error: 500 - ' + err.message});
	next(err);
}

const errorHandler = (err, req, res, next) => {
  res.status(500).send({ error: 'Internal server error. Log for middleware.' });
}

app.use(logErrors);
app.use(errorHandler);
