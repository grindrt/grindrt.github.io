const express = require('express');
const bodyParser     = require('body-parser');
const app = express();
const port = 9999;

require('./routes/server_route.js')(app, {});
app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res)=>{
	res.render('default', {title: 'Sorry', message: 'This page was lost.'})
});

app.listen(port, () => {
	console.log('hey there on port 9999');
});
