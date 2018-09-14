var jwt = require('express-jwt') 
var jwtDecode = require('jwt-decode') 
var config = require('./config') 
var jwks = require('jwks-rsa') 

var decode = function(req){
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		  return req.headers.authorization.split(' ')[1] 
	} else if (req.query && req.query.token) {
		return req.query.token 
	}
	return null 
}

module.exports = {
	jwtChecking: jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://bluelion.eu.auth0.com/.well-known/jwks.json"
    }),
    audience: '',
    issuer: "https://bluelion.eu.auth0.com",
    algorithms: ['RS256']
	}),
	decode: function(req){
		var resp = jwtDecode(decode(req))
		return resp 
	}
}
