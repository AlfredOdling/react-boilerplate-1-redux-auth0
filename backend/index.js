'use strict' 
var express = require('express')
var cors = require('cors')
var app = express()

var assert = require('assert') 
var bodyParser = require('body-parser') 

var user = require('./routes/user')
var jwt = require('./jwt') 

var config = require('./config') 

app.use(cors())
app.use(bodyParser.json())        // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	  extended: true
})) 

app.use('/user', user)

app.get('/', function (req, res) {
    res.send('Open api') 
})

app.listen(4000, function() {
  console.log('Listening on port 4000...')
})