const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth')
const Profile = require('../../models/Profile')

//@HttpGET
//@ROUTE        * api/profile/me
//@DESCRIPTION  * profile
//@ACCESS       * Private  
router.get('/me', auth, async (req, res) => {
    try {
        
        const profile = await Profile
            .findOne({ user: req.user.id})
            .populate('user', ['name', 'avatar']);

            if(!profile) {
                return res
                    .status(400)
                    .json({ msg: 'Profile does not exist' })
            }

            res.status(200).json(profile)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Something went wrong")
    }
})

//@HttpGET
//@ROUTE        * api/profile/all
//@DESCRIPTION  * get all profiles
//@ACCESS       * Public  
router.get('/all', async (req, res) => {
    try {
        const profiles = await Profile
            .find()
            .populate('user', [
                'name', 'avatar'
            ])
        return res.json(profiles)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Something went wrong")
    }
})


//@HttpGET
//@ROUTE        * api/profile/:id
//@DESCRIPTION  * get profile by id
//@ACCESS       * Public  
router.get('/:id', async (req, res) => {
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


//@HttpDELETE
//@ROUTE        * api/profile/:id
//@DESCRIPTION  * this will delete account
//@ACCESS       * Private  
//@LEVEL        * Strict
router.delete('/deleteaccount', auth, async (req, res) => {
    try {
        await Profile.findOneAndRemove({ user: req.user.id })
        await User.findOneAndRemove({ _id: req.user.id })

        res.json({ 
            msg: 'Account deleted successfully'
        })

        if(!profile) {
            return res.status(400).json({ 
                msg: "Profile not found"
            })
        }

        return res.json(profile)
    } catch (err) {
        console.log(err.message)
        if(err.kind == 'ObjectId')
        res.status(500).send("Profile not found")
    }
})





module.exports = router;
