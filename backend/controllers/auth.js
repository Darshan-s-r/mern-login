const User = require('../models/user')

//we can use this exports method any were in the folder that instaled express
exports.signup =  function(req, res){
  const {name, email, password} = req.body
  User.findOne({email})    //hear {email:'email'} but we made {email} bcz key and value name is same
  .then(user => {
    if (user) {
      return res.status(400).json({
        error: 'email is already taken'
      });
    }

    let newUser = new User({
      name,
      email,
      password
    });

    newUser.save()
      .then(() => {
        return res.json({
          message: 'user created successfully',
          newUser
        });
      })
      .catch(err => {
        return res.status(400).json({
          error: 'SIGNUP ERROR',
          err
        });
      });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
}
