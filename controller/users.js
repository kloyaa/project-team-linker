const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { validationResult } = require('express-validator')
const { checkRegistration }  = require('../helpers/errors/index')
const getAvatar = require('../helpers/methods/avatar')
const User = require('../models/User');

/*  @Route   POST api/users
    @Desc    Register user
    @Access  Public  
*/
router.post('/', checkRegistration, async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ 
            errors: errors.array()
        })
    }

    try {
        const { name, email, password } = req.body;

        // check if user exists
        let user = await User.findOne({ email });
        if(user) {
            return res.status(400).json({ 
                    errors: [{
                    msg: 'User already exists'
                }]
            })
        }

        const avatar = getAvatar(email);
        user = new User({
            name,
            email,
            avatar,
            password
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Return & save
        await user.save();

        const payload = {
            user: {  id: user.id }
        }

        jwt.sign(payload, config.get("jwtSecret"), { expiresIn: 360000 }, (err, token) => {
            if(err) res.status(400).send("Something went wrong")
            res.json({ token, user })
        })    
  
    } catch(err) {
        console.log(err.message)
        res.status(500).send("Something went wrong.")
    }
    
   
})

module.exports = router;