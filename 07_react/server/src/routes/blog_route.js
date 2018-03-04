const tokenGenerator = require('../config/tokenGenerator.js').tokenGenerator;
const ArticleModel = require('../models/ArticleModel.js');

module.exports = (app, db, logger) => {
//
  app.get('/blogs',
    tokenGenerator.checkAccessToken,
    (req, res, next)=>{
    ArticleModel.find((err, articles)=>{
        if(err) {
          next(err);
        }

        return res.send(articles);
    });
  });

  app.get('/blogs/:id',
    tokenGenerator.checkAccessToken,
    (req, res, next)=>{
    ArticleModel.findById(req.params.id, (err, article)=>{
      if(!article){
        const err = new Error();
        err.status = 404;
        next(err);
      }

      if(err){
        next(err);
      }

      return res.send(article);
     });
  });

  app.post('/blogs',
    tokenGenerator.checkAccessToken,
    (req, res)=>{
    let article = new ArticleModel({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author
    });

    article.save((err)=>{
      if (err) {
        next(err);
      }

      logger.log({ level: 'info', message: 'Article was created' });
      return res.send({ status: 'OK', article:article });
    });
  });

  app.put('/blogs/:id',
    tokenGenerator.checkAccessToken,
    (req, res)=>{
    ArticleModel.findById(req.params.id, (err, article)=>{
      if(!article){
        var err = new Error();
        err.status = 404;
        next(err);
      }

      if(err){
        next(err);
      }

      article.title = req.body.title;
      article.description = req.body.description;
      article.author = req.body.author;

      return article.save((err)=>{
        if (err) {
          next(err);
        }

        logger.log({ level: 'info', message: 'Article was updated' });
        return res.send({ status: 'OK', article: article });
      });
    });
  });

  app.delete('/blogs/:id',
    tokenGenerator.checkAccessToken,
    (req, res)=>{
    ArticleModel.findById(req.params.id, (err, article)=>{
      if(!article){
        var err = new Error();
        err.status = 404;
        next(err);
      }

      if(err){
        next(err);
      }

      return article.remove((err)=>{
        if (err) {
          next(err);
        }

        logger.log({ level: 'info', message: 'Article was updated' });
        return res.send({ status: 'OK' });
      });
    });
  });
};
