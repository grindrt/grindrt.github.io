
const {createLogger, format, transports} = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

module.exports = logger = createLogger({
	level: 'info',
	format: combine(
		timestamp(),
		prettyPrint()
	),
	transports: [
		new transports.File({ filename: 'logs.log' })
	]
});
