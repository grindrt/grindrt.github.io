const ArticleModel = require('../models/ArticleModel.js');

module.exports = (app, db, logger) => {

  app.get('/blogs', (req, res)=>{
    ArticleModel.find((err, articles)=>{
        if(err){
          return errorLog(err, res);
      }else{
        return res.send(articles);
      }
    });
  });

  app.get('/blogs/:id', (req, res, next)=>{
    ArticleModel.findById(req.params.id, (err, article)=>{
      if(!article){        
        // return notFoundLog(res);
        next();
      }
      // if(err){
      //   return errorLog(err, res);
      // }else{
        return res.send(article);
      // }
     });
  });

  app.post('/blogs', (req, res)=>{
    let article = new ArticleModel({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author
    });

    article.save((err)=>{
      if(err) {
        return errorLog(err, res);
      } else {
        logger.log({ level: 'info', message: 'Article was created' });
        return res.send({ status: 'OK', article:article });
      }
    });
  });

  app.put('/blogs/:id', (req, res)=>{
    ArticleModel.findById(req.params.id, (err, article)=>{
      if(!article) {
        return notFoundLog(res);
      }
      if(err){
        return errorLog(err, res);
      } else {
        article.title = req.body.title;
        article.description = req.body.description;
        article.author = req.body.author;

        return article.save((err)=>{
          if (err) {
            return errorLog(err, res);
          } else {
            logger.log({ level: 'info', message: 'Article was updated' });
            return res.send({ status: 'OK', article: article });
          }
        });
      }
    });
  });

  app.delete('/blogs/:id', (req, res)=>{
    ArticleModel.findById(req.params.id, (err, article)=>{
      if(!article) {
        return notFoundLog(res);
      }
      if(err){
        return errorLog(err, res);
      } else {
        return article.remove((err)=>{
          if (err) {
            return errorLog(err, res);
          } else {
            logger.log({ level: 'info', message: 'Article was updated' });
            return res.send({ status: 'OK' });
          }
        });
      }
    });
  });
}

const notFoundLog = (res) => {
    logger.log({ level: 'error', message: 'Article not found' });
    return res.status(404).send({error: 'Not found' });
}

const errorLog = (err, res) => {
  logger.log({ level: 'error', message: 'Internal server error: 500 - ' + err.message });
  return res.status(500).send({ error: 'Internal server error' });
}
