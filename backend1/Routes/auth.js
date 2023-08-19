const express = require('express');

const router = express.Router()

//importing signup  [ and we destructureing it bcz in auth file we export it like object ]
const {signup} = require('../controllers/auth');

//import validators
const {userSignupValidation} = require('../validators/auth');
const {runValidation} = require('../validators');   //hear {../validators/index actually but if the file name is index u can leave it }

//here we are using router from express.Router insted of app.get
router.post("/signup", userSignupValidation, runValidation, signup);

module.exports = router