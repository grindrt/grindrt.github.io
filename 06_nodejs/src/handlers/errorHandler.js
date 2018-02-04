const logger = require('../logger.js');

module.exports = (app) => {
  const logErrors = (err, req, res, next)=>{
  	console.log(err.stack);
    let message = 'Internal server error (' + err.status +'): ' + err.message + '';
  	logger.log({ level: 'error', message: message});
  	next(err);
  };

  const notFoundErrorHandler = (err, req, res, next) => {
    console.log(err.status);

    if(err.status != 404) {
      next(err);
    }

    logger.log({ level: 'error', message: 'Not found exception: ' + err.message});
    res.status(404).send({ error: 'Not found.' });
  };

  const errorHandler = (err, req, res, next) => {
    res.status(500).send({ error: 'Internal server error. Log for middleware.' });
  };

  app.use(logErrors);
  app.use(notFoundErrorHandler);
  app.use(errorHandler);
}
