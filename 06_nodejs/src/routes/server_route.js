const blogRoutes = require('./blog_route.js');
module.exports = (app, db) =>{
  blogRoutes(app, db);
}
