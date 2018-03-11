const jwt = require('jsonwebtoken');
const tokenGenerator = require('../config/tokenGenerator.js').tokenGenerator;
const User = require('../models/UserModel');

const authentication = (req, res) => {
  let { username, password } = req.body;

  let user = User.findOne({ username });

  if (user === undefined || user.password !== password) {
    res.status(403).json({
      success: false,
      message: 'Bad username or password'
    });
  } else {
    let token = tokenGenerator.generateToken(user._id);
    res.status(200).json({ token });
  }
};

module.exports = authentication;