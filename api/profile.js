const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')

//Middleware
const auth = require('./../middleware/auth');

//Models
const Profile = require('../models/Profile');
const User = require('../models/User');

/*  @route   GET api/profile/me
    @desc    Get current users
    @access  Private  */
router.get('/me', auth, async (req, res) => {
    try {
        
        const profile = await Profile
            .findOne({ user: req.user.id})
            .populate('user', ['name', 'avatar']);

            if(!profile) {
                return res.status(400).json({ msg: 'Profile does not exist' })
            }
        res.json(profile)
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Something went wrong")
    }
    res.send('PROFILE ROUTE')
})

/*  @route   POST api/profile
    @desc    Create or Update user profile
    @access  Private  */
router.post('/', [auth, 
    [
        check('status', 'Status is required')
            .not()
            .isEmpty(),
        check('skills', 'Skills is required')
            .not()
            .isEmpty()
    ]
], async (req, res) => {
    const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
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
        twitter,
        instagram,
        linkedIn
    }
    = req.body;
    const profileFields = { };
    profileFields.user = req.user.id;

    if(company) profileFields.company = company;
    if(website) profileFields.website = website;
    if(location) profileFields.location = location;
    if(bio) profileFields.bio = bio;
    if(status) profileFields.status = status;
    if(githubUsername) profileFields.githubUsername = githubUsername;

    if (typeof skills !== 'undefined') {
        profileFields.skills = req.body.skills 
        .split(',').map((skill) => {
            return skill.trim()
        })
    }
    profileFields.social = { }
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedIn) profileFields.social.linkedIn = linkedIn;
    if (instagram) profileFields.social.instagram = instagram;

    try {
        let profile = await Profile.findOne({ user: req.user.id })
            if(profile) {
                profile = await Profile.findOneAndUpdate({ user: req.user.id }, 
                    { $set: profileFields },
                    { new: true }
                )
                return res.json(profile)
            }
            profile = new Profile(profileFields);
            await profile.save()
            res.json(profile)
            console.log(profile)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Something went wrong')
    }
    res.send('x')
})

/*  @route   GET api/profile
    @desc    GET all profiles
    @access  Public  */
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', [
            'name', 'avatar'
        ])
        res.json(profiles)
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Something went wrong")
    }
})

/*  @route   GET api/profile/user/:id
    @desc    GET profile by Id
    @access  Public  */
router.get('/user/:id', async (req, res) => {
        try {
            const profile = await Profile
                .findOne({ user: req.params.id })
                .populate('user', [ 'name', 'avatar'])

                if(!profile) {
                   return res.status(400).json({ msg: "Profile not found"})
                }

            res.json(profile)
        } catch (err) {
            console.log(err.message)
            if(err.kind == 'ObjectId')
            res.status(500).send("Profile not found")
        }
    })

/*  @route   DELETE api/profile/user/:id
    @desc    DELETE profile, user and Posts
    @access  Private  */
router.delete('/', auth, async (req, res) => {
    try {
        //Remove profile
        await Profile.findOneAndRemove({ user: req.user.id })
        await User.findOneAndRemove({ _id: req.user.id })

        res.send({ msg: 'Account deleted successfully'})
        console.log('Account deleted successfully')

        if(!profile) {
            return res.status(400).json({ msg: "Profile not found"})
        }

        res.json(profile)
    } catch (err) {
        console.log(err.message)
        if(err.kind == 'ObjectId')
        res.status(500).send("Profile not found")
    }
})

/*  @route   PUT api/profile/experience
    @desc    PUT update profile experience
    @access  Private  */
router.put('/experience', [auth, [
    check('title', 'Title is required')
        .not()
        .isEmpty(),
    check('company', 'Company is required')
        .not()
        .isEmpty(),
    check('from', 'From is required')
        .not()
        .isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json(({ errors: errors.array()}))
    }
    const { title, company, location, from, to, current , description } = req.body;
    const newExperience = {
        title, company, location, from, to, current , description
    }
    try {
        const profile = await Profile.findOne({ user: req.user.id});
        profile.experience.unshift(newExperience)

        profile.save()
        res.json(profile)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ msg: "Something went wrong" })
    }
})

/*  @route   DELETE api/profile/experience
    @desc    DELETE update profile experience
    @access  Private  */
router.delete('/experience/:id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id});
        
        //Get index to remove
        const removeExperience = profile.experience
            .map(index =>index.id)
            .indexOf(req.params.id)

            profile.experience
                .splice(removeExperience, 1)

        profile.save()
        res.json(profile)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ msg: "Something went wrong" })
    }
})
module.exports = router;