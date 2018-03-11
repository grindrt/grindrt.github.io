const express = require('express');
const router = express.Router();
const tokenGenerator = require('../config/tokenGenerator.js').tokenGenerator;
const ArticleModel = require('../models/ArticleModel.js');

const ACS_CTRL_ALLW_ORGN = 'Access-Control-Allow-Origin';
const ACCESS_CONTROL_ALLOW_METHODS = 'Access-Control-Allow-Methods';
const CONTENT_TYPE = 'Content-Type';
const METHODS = 'GET, POST, OPTIONS, PUT, PATCH, DELETE';
const APP_JSON = 'application/json';

router.get('/',
  tokenGenerator.checkAccessToken,
  (req, res, next) => {
    ArticleModel.find((err, articles) => {
      if (err) {
        next(err);
      }

      res.setHeader(ACS_CTRL_ALLW_ORGN, '*');
      res.setHeader(ACCESS_CONTROL_ALLOW_METHODS, METHODS);
      res.send({ items: articles });
    });
  });

router.get('/:id',
  tokenGenerator.checkAccessToken,
  (req, res, next) => {
    ArticleModel.findById(req.params.id, (err, article) => {
      if (!article) {
        let err = new Error('Not found');
        err.status = 404;
        next(err);
        return;
      }

      if (err) {
        next(err);
        return;
      }

      res.setHeader(ACS_CTRL_ALLW_ORGN, '*');
      res.setHeader(ACCESS_CONTROL_ALLOW_METHODS, METHODS);
      res.setHeader(CONTENT_TYPE, APP_JSON);
      res.send(article);
    });
  });

router.post('/',
  tokenGenerator.checkAccessToken,
  (req, res, next) => {
    let article = new ArticleModel(req.body);

    article.save((err) => {
      if (err) {
        next(err);
      }

      logger.log({ level: 'info', message: 'Article was created' });
      res.setHeader(ACS_CTRL_ALLW_ORGN, '*');
      res.setHeader(ACCESS_CONTROL_ALLOW_METHODS, METHODS);
      res.setHeader(CONTENT_TYPE, APP_JSON);
      res.json(article);
    });
  });

router.put('/:id',
  tokenGenerator.checkAccessToken,
  (req, res, next) => {
    ArticleModel.findById(req.params.id, (err, article) => {
      if (!article) {
        var err = new Error();
        err.status = 404;
        next(err);
      }

      if (err) {
        next(err);
      }

      article.title = req.body.title;
      article.text = req.body.text;
      article.author = req.body.author;

      return article.save((err) => {
        if (err) {
          next(err);
        }

        logger.log({ level: 'info', message: 'Article was updated' });
        res.setHeader(ACS_CTRL_ALLW_ORGN, '*');
        res.setHeader(ACCESS_CONTROL_ALLOW_METHODS, METHODS);
        res.setHeader(CONTENT_TYPE, APP_JSON);
        res.json(article);
      });
    });
  });

router.delete('/:id',
  tokenGenerator.checkAccessToken,
  (req, res, next) => {
    ArticleModel.findById(req.params.id, (err, article) => {
      if (!article) {
        var err = new Error();
        err.status = 404;
        next(err);
      }

      if (err) {
        next(err);
      }

      return article.remove((err) => {
        if (err) {
          next(err);
        }

        res.setHeader(ACS_CTRL_ALLW_ORGN, '*');
        res.setHeader(ACCESS_CONTROL_ALLOW_METHODS, METHODS);
        res.send({ status: 'OK' });
      });
    });
  });

module.exports = router;

