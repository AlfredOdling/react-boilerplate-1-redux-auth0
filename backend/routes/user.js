var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser') 
var jwt = require('../jwt') 
var config = require('../config') 

router.use(jwt.jwtChecking)

router.use(bodyParser.json()) 
router.use(bodyParser.urlencoded({
	  extended: true
})) 

router.get('/', function (req, res) {
	var decoded = jwt.decode(req)
	res.status(200).json({data: decoded}) 

})

module.exports = router
