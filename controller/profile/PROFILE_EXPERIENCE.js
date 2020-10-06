const express = require('express');
const router = express.Router();
const { checkProfileExperience } = require('../../helpers/errors');
const { validationResult } = require('express-validator')

const auth = require('../../middleware/auth')

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
router.delete('/:id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id});

        const getExperience = profile.experience
            .find(title => title.id == req.params.id)
        if(!getExperience) {
            return res.status(400).send("Experience not found")
        }    

        //Get index to remove
        const removeExperience = profile.experience
            .map(index =>index.id)
            .indexOf(req.params.id)

            profile.experience
                .splice(removeExperience, 1)

        profile.save()
        return res.status(200).json(getExperience)

    } catch (err) {
        console.log(err.message)
        res.status(500).json({ msg: "Something went wrong" })
    }
})

module.exports = router;