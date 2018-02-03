const mongoose = require('../dal/mongoose.js'),
  Schema = mongoose.Schema,
  bcrypt = require('bcrypt'),
  SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  },
  pass:{
    type: String,
    required: true
  }
});

UserSchema.pre('save', ()=>{
  let user = this;

  if(!user.isModified('pass')){
    return next();
  }
})

module.exports = mongoose.model('User', UserSchema);
