const User = require('../models/user')

//we can use this exports method any were in the folder that instaled express
/*exports.signup =  function(req, res){
  const {name, email, password} = req.body
  User.findOne({email})    //hear {email:'email'} but we made {email} bcz key and value name is same
  .then(user=>{
    if(user){
    res.status(400).json({
     error: 'email is allready taken'
   })
  }
 })
 .catch(err=>{
    res.status(500).json({
    error: err
  })})
  
  
    let newUser = new User({
     name, 
     email,
     passowrd 
    })
    newUser.save()
    .catch(err=>{
      return res.status(400).json({
        error: 'SIGNUP ERROR',err
      })
    })
    .then(()=>{
      return res.json({
        message: 'user created succesfully',newUser
      })
    })

  } */

exports.signup = (req, res)=>{

};