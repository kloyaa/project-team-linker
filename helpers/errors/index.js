const { check, validationResult } = require('express-validator')


module.exports.checkRegistration = [
    check('email', 'Please input a valid email')
        .isEmail(),
    check('password', 'Password must be 6-30 characters long')
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
module.exports.checkFullName = [
    check('firstName', 'First name is required')
        .not()
        .isEmpty(),
    check('lastName', 'Last name is required')
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

module.exports.checkProfileEducation = [
    check('school', 'School is required')
        .not()
        .isEmpty(),
    check('fieldOfStudy', 'Field of study is required')
        .not()
        .isEmpty(),
    check('from', 'From is required')
        .not()
        .isEmpty(),
    check('description', 'Description is required')
        .not()
        .isEmpty()
]

module.exports.checkPostProps = [
    check('text', 'Message is required')
        .not()
        .isEmpty()
]
module.exports.checkCommentProps = [
    check('text', 'Comment is required')
        .not()
        .isEmpty()
]
module.exports.validateErrors = function (req, res) {

}
