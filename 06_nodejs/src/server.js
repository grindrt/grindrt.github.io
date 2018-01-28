const express = require('express');
const bodyParser = require('body-parser');
const {createLogger, format, transports} = require('winston');
const { combine, timestamp, label, prettyPrint } = format;
const app = express();
const port = 9999;

const logger = createLogger({
	level: 'info',
	format: combine(
		timestamp(),
		prettyPrint()
	),
	transports: [
		new transports.File({ filename: 'logs.log' })
	]
});

require('./routes/server_route.js')(app, {}, logger);
app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

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
