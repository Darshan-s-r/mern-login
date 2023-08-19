const {check} = require('express-validator')

exports.userSignupValidation = [
  check('name')
  .isLength({min:2})
  .withMessage('name is required and it must be at least 2 charactors'),
  check('email')
  .isEmail()
  .withMessage('Must be a valid user'),
  check('password')
  .isLength({min:8})
  .withMessage('password must be atleast 8 charactors'),
];