const express = require('express');
const router = express.Router();
const { checkFullName } = require('../../helpers/errors');
const { validationResult } = require('express-validator')

const auth = require('../../middleware/auth')

//@HttpPOST
//@ROUTE        * api/profile/new
//@DESCRIPTION  * profile
//@ACCESS       * Private  
router.post('/', [auth, checkFullName], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const {
        company,
        website,
        location,
        bio,
        status,
        githubUsername,
        skills,
        youtube,
        facebook,
        instagram,
        gitHub,
        twitter,
        education,
        experience,
        firstName,
        lastName
    } = req.body;

    const profileFields = {};
    profileFields.user = req.user.id;

    if (firstName) profileFields.firstName = firstName;
    if (lastName) profileFields.lastName = lastName;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubUsername) profileFields.githubUsername = githubUsername;

    profileFields.social = {}
    if (gitHub) profileFields.social.gitHub = gitHub;

    if (typeof skills !== 'undefined') {
        profileFields.skills = req.body.skills
            .split(',').map((skill) => {
                return skill.trim()
            })
    }


    // profileFields.experience = {}
    // if (experience.title)
    //     profileFields.experience.title = experience.title;
    // if (experience.company)
    //     profileFields.experience.company = experience.company;
    // if (experience.location)
    //     profileFields.experience.title = experience.location;
    // if (experience.from)
    //     profileFields.experience.from = experience.from;
    // if (experience.to)
    //     profileFields.experience.to = experience.to;
    // if (experience.current)
    //     profileFields.experience.current = experience.current;
    // if (experience.description)
    //     profileFields.experience.description = experience.description;

    // profileFields.social = {}
    // if (youtube) profileFields.social.youtube = youtube;
    // if (twitter) profileFields.social.twitter = twitter;
    // if (facebook) profileFields.social.facebook = facebook;
    // if (instagram) profileFields.social.instagram = instagram;
    // if (gitHub) profileFields.social.gitHub = gitHub;

    // profileFields.education = {}
    // if (education.school)
    //     profileFields.education.school = education.school;
    // if (education.degree)
    //     profileFields.education.degree = education.degree;
    // if (education.fieldOfStudy)
    //     profileFields.education.fieldOfStudy = education.fieldOfStudy;
    // if (education.from)
    //     profileFields.education.from = education.from;
    // if (education.to)
    //     profileFields.education.to = education.to;
    // if (education.current)
    //     profileFields.education.current = education.current;
    // if (education.description)
    //     profileFields.education.description = education.description;


    try {
        let profile = await Profile.findOne({ user: req.user.id })
        if (profile) {
            profile = await Profile.findOneAndUpdate({ user: req.user.id },
                { $set: profileFields },
                { new: true }
            )
            return res.json(profile)
        }
        profile = new Profile(profileFields);
        await profile.save()
        res.json(profile)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Something went wrong')
    }
})

module.exports = router