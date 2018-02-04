const tokenGenerator = require('../config/tokenGenerator.js').tokenGenerator;

module.exports = (app, db, logger, passport) => {
  // app.get('/', (req, res, next)=>{
  //   res.render('home', {user: req.user});
  // });
  //
  // app.get('/login', (req, res, next)=>{
  //   res.send({message: req.flash('loginMessage')});
  // });
  //
  // app.post('/login',
  //   passport.authenticate('local', {failureRedirect: '/login'}),
  //   (req, res, next)=>{
  //     res.redirect('/');
  // });


    app.post('/login',
    passport.authenticate('local-login'),
    (req, res, next)=>{
      console.log(req);

      const token = tokenGenerator.generateToken(req.user._id);

      res.send(token);
    }
  )
};
