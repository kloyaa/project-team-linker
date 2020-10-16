const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')

const auth = require('./../middleware/auth')
    
//@ROUTE        * api/auth
//@DESCRIPTION  * Find user by id
//@ACCESS       * Public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        return res.send(user)
    } catch (err) {
        console.log(err.message)
    }
});


//@ROUTE        * api/users
//@DESCRIPTION  * Sign in
//@ACCESS       * Public
router.post('/login', [
    check('email', 'Please input a valid email')
        .isEmail(),
    check('password', 'Please enter a password')
        .exists(),
], async (req, res) => {
    const errors = validationResult(req);

    // validate
    if(!errors.isEmpty()) {
        return res.status(400).json({ 
            errors: errors.array()
        })
    }

    try {
        const { email, password } = req.body;
        // check if user exists
        let user = await User.findOne({ email });
        if(!user) {
            return res
                .status(400)
                .send("Username and/or Password is incorrect")
         }

        const passwordIsMatch = await bcrypt.compare(password, user.password);
        if(!passwordIsMatch) {
            return res
                .status(400)
                .send("Username and/or Password is incorrect")
        }
        const payload = {
            user: { id: user.id }
        }
        jwt.sign(payload, config.get("jwtSecret"), { expiresIn: 360000 }, (err, token) => {
            if(err) res.status(429).send("Signing token failed")
            console.log({ token, user })
            res.json({ token })
        })    
    
    } catch(err) {
        console.log(err.message)
        res.status(500).send("Something went wrong.")
    }
    
   
})
module.exports = router;