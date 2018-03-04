
const Strategy = require('passport-local').Strategy;
const UserModel = require('../models/UserModel.js');

module.exports = (passport) => {
  passport.serializeUser((user, done)=>{
    done(null, user.id);
  });

  passport.deserializeUser((id, done)=>{
    User.findById(id, (err, user)=>{
      done(err, user);
    })
  });

  passport.use('local-login', new Strategy({
    usernameField: 'login',
    passwordField: 'password',
    passReqToCallback: true
  },
  (req, login, password, done) => {
    UserModel.findOne({login: 'login'}, (err, user)=>{
      if(err) return done(err);

      if(!user) return done(null, false, req.flash('loginMessage', 'No user found.'));

      if(!user.validPassword(password)) return done(null, false, req.flash('loginMessage', 'Wrong password.'));

      return done(null, user);
    })
  }
  ))

  passport.use('local-signup', new Strategy({
    usernameField: 'login',
    passwordField: 'password',
    passReqToCallback: true
  },
  (req, login, password, done) => {
    console.log('Auth, data: ' + login + ", " + password);

    process.nextTick(()=>{
      UserModel.findOne({login: 'login'}, (err, user) => {
        if(err) return done(err);

        if(user){
          return done(null, false, req.flash('signupMessage', 'That username is already existis'))
        } else {
          let newUser = new User();
          newUser.login = login;
          newUser.password = newUser.generateHash(password);

          newUser.save((err)=>{
            if(err) throw err;
            return done(null, newuser);
          })
        }
      })
    })
  }
  ));
}
