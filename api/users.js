const express = require('express')
const router = express.Router();
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')

const User = require('./../models/User');

/*  @Route   POST api/users
    @Desc    Register user
    @Access  Public  
*/
router.post('/', [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Please input a valid email')
        .isEmail(),
    check('password', 'Please enter a password')
        .isLength({ 
            min: 6,
            max: 30
        }),
], async (req, res) => {
    const errors = validationResult(req);

    // validate
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

    // get user gravatar
    const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
    })

    user = new User({
        name,
        email,
        avatar,
        password
    });
    // encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Return & save
    await user.save();
    const payload = {
        user: {
            id: user.id
        }
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