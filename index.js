'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port', (process.env.PORT || 5000))

// Process data

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json)

// Routes

app.get('/', function(req, res){
	res.send("Hello motherducker!")
})

//Facebook

app.get('/webhook/', function(req, res){
	if (req.query['hub.verify_token'] === "sexytimes"){
		res.send(req.query['hub.challenge'])
	}
	res.send("You're Lost bruh.")
})

app.listen(app.get('port'), function(){
	console.log("running!")
})