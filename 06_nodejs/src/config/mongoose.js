const logger = require('../logger.js');
const config = require('../../config.json');

const mongoose = require('mongoose');
mongoose.connect(config.dbUrl);
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
