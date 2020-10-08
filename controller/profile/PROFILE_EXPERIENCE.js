const express = require('express');
const router = express.Router();
const { checkProfileExperience } = require('../../helpers/errors');
const { validationResult } = require('express-validator')

const auth = require('../../middleware/auth')
const Profile = require('../../models/Profile')

//@HttpPUT
//@ROUTE        * api/profile/experience
//@DESCRIPTION  * add profile experience
//@ACCESS       * Private
router.put('/', [auth, checkProfileExperience], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json(({ 
            errors: errors.array()
        }))
    }   
    const { title, company, location, from, to, current , description } = req.body;
    const newExperience = { title, company, location, from, to, current , description };

    try {
        const profile = await Profile.findOne({ user: req.user.id});
        profile.experience.unshift(newExperience)
        profile.save()
        res.status(200).json(profile)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ msg: "Something went wrong" })
    }
})

//@HttpDELETE
//@ROUTE        * api/profile/experience/:id
//@DESCRIPTION  * delete profile experience
//@ACCESS       * Private
router.delete('/:experienceId', auth, async (req, res) => {
    try {

        // //Get index to remove
        // const getIndex = profile.experience
        //     .map(index =>index.id)
        //     .indexOf(req.params.experienceId)

        // //Since indexOf() returns -1 if element is not found
        // //We have to create validation
        // if(getIndex === -1 || getIndex < 1) {
        //     return res.status(400).send("Experience record not found")
        // }
        // profile.experience.splice(getIndex, 1)
        
        const profile = await Profile.findOne({ user: req.user.id });

        profile.experience = profile.experience.filter(allIndex => {
            return allIndex.id !== req.params.experienceId
        })
        
        await profile.save()
        return res.status(200).json(profile)

    } catch (err) {
        console.log(err.message)
        res.status(500).json({ msg: "Something went wrong" })
    }
})

module.exports = router;