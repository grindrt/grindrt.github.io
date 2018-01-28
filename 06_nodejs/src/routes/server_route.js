const blogRoutes = require('./blog_route.js');
module.exports = (app, db, logger) =>{
  blogRoutes(app, db, logger);
}
