const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next) {
    //Get the token from header
    const token = req.header('x-auth-token');

    //Return if no token provided
    if(!token) {
        return res.status(401).json({ msg: 'No token provided'})
    }
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded.user;
        next()
    } catch(err) {
        res.status(401).json({ msg: 'Invalid token'})
    }
}