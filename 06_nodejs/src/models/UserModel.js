const mongoose = require('../config/mongoose.js'),
  Schema = mongoose.Schema,
  bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  login:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});

UserSchema.pre('save', function (next) {
  let user = this;
  if(!user.isModified('password')){
    return next();
  };
  user.password = this.generateHash(user.password);
  next();
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const UserModel = mongoose.model('User', UserSchema);

// const tmpUser = new UserModel({
//   firstName: 'John',
//   lastName: 'Cena',
//   login: 'login',
//   password: 'pass'
// });
//
// tmpUser.save((err)=>{
//   if(err) throw err;
// })

module.exports = UserModel;
