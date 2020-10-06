const { check, validationResult } = require('express-validator')


module.exports.checkRegistration = [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Please input a valid email')
        .isEmail(),
    check('password', 'Please enter a password')
        .isLength({ 
            min: 6,
            max: 30
        })
]
module.exports.checkStatusAndSkills = [
    check('status', 'Status is required')
        .not()
        .isEmpty(),
    check('skills', 'Skills is required')
        .not()
        .isEmpty()
]
module.exports.checkProfileExperience = [
    check('title', 'Title is required')
        .not()
        .isEmpty(),
    check('company', 'Company is required')
        .not()
        .isEmpty(),
    check('from', 'From is required')
        .not()
        .isEmpty()
]
module.exports.validateErrors = function (req, res) {
   
}
