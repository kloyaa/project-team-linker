const express = require('express')
const router = express.Router();

//@ROUTE        * api/posts
//@DESCRIPTION  * Get all posts
//@ACCESS       * Public
router.get('/', (req, res) => {
    res.send('POSTS ROUTE')
})

module.exports = router;