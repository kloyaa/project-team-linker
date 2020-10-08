const express = require('express');
const router = express.Router();


const User = require('./../../models/User')

//@ROUTE        * api/users/all
//@DESCRIPTION  * get all users
//@ACCESS       * Public  
router.get('/', async (req, res) => {
    try {
        const users = await User
            .find()
            .select({ name: 1, email: 1, avatar: 1, dateJoined: 1});
        
        return res.json(users)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Something went wrong")
    }
})

module.exports = router;