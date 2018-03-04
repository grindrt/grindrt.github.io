const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const logger = require('./logger.js');

passport.use(new Strategy((login, password, cb)=>{}));

const app = express();
const port = 9999;

app.set('views', './src/views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(flash());
require('./config/passport.js')(passport);
require('./routes/server_route.js')(app, {}, passport);

app.use((req, res)=>{
	logger.log({
		level: 'error',
		message: 'Lost page'
	});
	res.render('default', {title: 'Sorry', message: 'This page was lost.'})
});

app.listen(port, () => {
	logger.log({
		level: 'info',
		message:'Hey there! You are on port 9999'
	});
});

require('./handlers/errorHandler.js')(app);
