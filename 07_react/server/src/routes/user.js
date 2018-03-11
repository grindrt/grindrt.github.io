
const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel');
const tokenGenerator = require('../config/tokenGenerator.js').tokenGenerator;

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', (req, res) => {
  let user = new UserModel(req.body);
  user.save().then(createdUser => {
    let token = tokenGenerator.generateToken(createdUser._id);
    res.status(200).json({ token });
  });
});

module.exports = router;