const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('config');

//@HttpGET
//@ROUTE        * api/profile/github/:username
//@DESCRIPTION  * Get github profile dynamically
//@ACCESS       * Public  
router.get('/github/:username', async (req, res) => {
    try {
        const options = {
            uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${config.get("gitHubClientId")}&client_secret=${config.get("gitHubSecret")}`,
            method: 'GET',
            headers: { 'user-agent': 'node.js'}
        }
        request(options, (error, response, body) => {
            if(error) console.log(err)
            if(response.statusCode !== 200){
                return res.status(404).json({ msg: "GitHub profile not found" })
            }
            return res.json(JSON.parse(body))
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Something went wrong")
    }
})

module.exports = router;

