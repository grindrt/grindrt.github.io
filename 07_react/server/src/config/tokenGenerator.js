const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel.js');

const tokenGenerator = {};
// {
tokenGenerator.generateToken = (id) => {
  return jwt.sign({ id: id }, config.secretKey);
};

tokenGenerator.checkAccessToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
    const err = new Error();
    err.status = 401;
    err.message = 'Access denied.';
    next(err);
  }

  const decoded = jwt.verify(token, config.secretKey);
  console.log(token);
  console.log(decoded);
  if (!decoded.id) throw new Error('Wrong token type');

  const found = UserModel.findById(decoded.id, (err, user) => {
    if (err) throw err;
    console.log(user);

    next();
  });
};
// }

module.exports.tokenGenerator = tokenGenerator;
