const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const route = require('./routes')

const app = express();

//database config
const db = require('../database/config')

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));


//post mail format
app.post('/contactUs', route.createMail)
//post photo
app.post('/opusCustomize', route.createPhoto)
//post video
app.post('/opusCustomize', route.createVideo)
//post documentary
app.post('/opusCustomize', route.createDocumentary)
//post colaboration
app.post('/opusCustomize', route.createColaboration)
//post documents
app.post('/opusCustomize', route.createDox)

//get mail format
app.get('/opusCustomize', route.getMail)
//get photo
app.get('/photoPortfolio', route.getPhoto)
//post video
app.get('/videoPortfolio', route.getVideo)
//post documentary
app.get('/documentaries', route.getDocumentary)
//post colaboration
app.get('/colaboration', route.getColab)
//post documents
app.get('/documents', route.getDox)

module.exports = app;
