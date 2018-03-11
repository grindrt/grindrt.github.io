const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');

const authentication = require('./controllers/AuthenticationController');

const index = require('./routes/index');
const blogs = require('./routes/blogs');
const user = require('./routes/user');

const logger = require('./logger.js');
const db = require('./config/mongoose');

passport.use(new Strategy((login, password, cb)=>{}));

const app = express();
const port = 9999;

app.use(cors());

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(flash());
require('./config/passport.js')(passport);
// require('./routes/server_route.js')(app, db, passport);

app.use('/', index);
app.use('/user', user);
app.get('/login', (req, res) => res.render('login'));
app.post('/login', authentication);
app.use('/blogs', blogs);

app.use((req, res)=>{
	logger.log({
		level: 'error',
		message: 'Lost page'
	});
	res.render('default', {title: 'Sorry', message: 'This page was lost.'})
});

app.use(function (err, req, res, next) {
	const errMessage = err.message || 'Sorry, but this page does not exist!';
    res.locals.message = errMessage;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

	logger.log({
		level: 'error',
		message: errMessage
	});
	
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => {
	logger.log({
		level: 'info',
		message:'Hey there! You are on port 9999'
	});
});

require('./handlers/errorHandler.js')(app);
