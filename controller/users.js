const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { validationResult } = require('express-validator')
const { checkRegistration }  = require('../helpers/errors/index')
const getAvatar = require('../helpers/methods/avatar')

const User = require('../models/User');

//@ROUTE        * api/users
//@DESCRIPTION  * Register a user
//@ACCESS       * Public
router.post('/', checkRegistration, async (req, res) => {
    try {
     
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            /* const errorsPrototype = { ...errors }
            if(errorsPrototype.errors[0].msg === "Password must be 6-30 characters long")
                return res.status(400).send("Password must be 6-30 characters long")
            if(errorsPrototype.errors[0].msg === "Password must be 6-30 characters long")
                return res.status(400).send("Password must be 6-30 characters long")
            */
           return res.status(400).json({ 
            errors: errors.array()
         })
        }
        const { name, email, password } = req.body;

        // check if user exists
        let user = await User.findOne({ email });
    
        if(user) {
            return res
                .status(406)
                .send("Email already exist, Try signing in.")
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
            if(err) {
                return res.status(400).json({ msg:  "Something went wrong"})
            }
            return res.status(200).json({ token })
        })    
  
    } catch(err) {
        console.log(err.message)
        res.status(500).send("Something went wrong.")
    }
    
   
})

module.exports = router;