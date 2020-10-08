const express = require('express');
const router = express.Router();
const { checkProfileEducation } = require('../../helpers/errors');
const { validationResult } = require('express-validator')

const auth = require('../../middleware/auth')
const Profile = require('../../models/Profile')

//@HttpPUT
//@ROUTE        * api/profile/education
//@DESCRIPTION  * add profile education
//@ACCESS       * Private
router.put('/', [auth, checkProfileEducation], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json(({ 
            errors: errors.array()
        }))
    }   
    const { 
        school, 
        degree, 
        fieldOfStudy, 
        from, 
        to,  
        current , 
        description } = req.body;
    const newEducation = { 
        school, 
        degree, 
        fieldOfStudy, 
        from, 
        to,  
        current , 
        description };

    try {
        const profile = await Profile.findOne({ user: req.user.id});
        profile.education.unshift(newEducation)
        profile.save()
        res.status(200).json(profile)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ msg: "Something went wrong" })
    }
})



//@HttpDELETE
//@ROUTE        * api/profile/education/:id
//@DESCRIPTION  * delete profile education
//@ACCESS       * Private
router.delete('/:educationId', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id});
        profile.education = profile.education.filter(allIndex => {
            return allIndex.id !== req.params.educationId
        })
        await profile.save()
        return res.status(200).json(profile)

    } catch (err) {
        console.log(err.message)
        return res.status(500).send("Something went wrong")
    }
})


module.exports = router