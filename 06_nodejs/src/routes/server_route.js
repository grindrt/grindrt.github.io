const logger = require('../logger.js');

const blogRoutes = require('./blog_route.js');
const userRoutes = require('./user_route.js');
module.exports = (app, db) =>{
  blogRoutes(app, db, logger);
  userRoutes(app, db, logger);
}
