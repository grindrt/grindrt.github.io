const logger = require('../logger.js');

const blogRoutes = require('./blogs.js');
const userRoutes = require('./user.js');
module.exports = (app, db, passport) =>{
  blogRoutes(app, db, logger);
  userRoutes(app, db, logger, passport);
}
