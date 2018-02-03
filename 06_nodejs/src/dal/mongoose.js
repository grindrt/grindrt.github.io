const logger = require('../logger.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogs');
const db = mongoose.connection;

db.on('error', (err)=>{
  logger.log({
		level: 'error',
		message: 'Connection problems: ' + err.message
	});
});

db.once('open', ()=>{
  logger.log({
		level: 'info',
		message: 'Connected to MongoDb'
	})
});

module.exports = mongoose;
