const {body} = require('express-validator') 

exports.validationCheck = [
    body ('email','Please enter a valid email').isEmail(),
    body ('Password','PassWord should be at least 8 characters').isLength({min:8})
]