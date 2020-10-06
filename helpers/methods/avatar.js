const gravatar = require('gravatar')

module.exports  = function(email) {
    return gravatar.url(email, { 
        s: '200', 
        r: 'pg',  
        d: 'mm'  
    })
}

