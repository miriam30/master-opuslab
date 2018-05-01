//imported Tables
const Mail = require("../database/schema.js").Mail;
const Photo = require("../database/schema.js").Photo;
const Video = require("../database/schema.js").Video;
const Documentary = require("../database/schema.js").Documentary;
const Colaboration = require("../database/schema.js").Colaboration;
const Dox = require("../database/schema.js").Dox;


const url = require('url');
const path = require('path');


//Query to post mail
exports.createMail = (req, res) => {
  Mail.create({
    name: req.body.name,
    companyName: req.body.companyName,
    description: req.body.descripcion,
    dateDue: req.body.dateDue,
    phone: req.body.phone,
    email: req.body.email
  }, (err, mail) =>{
    if (err) {
      res.send(err)
      console.log('mail not posted');
    }
    res.json(mail);
  })
}
//Query to post photo
exports.createPhoto = (req, res) => {
  Photo.create({
    title: req.body.title,
    imgLink: req.body.imgLink
  }, (err, photo) =>{
    if (err) {
      res.send(err)
      console.log('photo not posted');
    }
    res.json(photo);
  })
}
//Query to post video
exports.createVideo = (req, res) => {
  Video.create({
    title: req.body.title,
    videoLink: req.body.videoLink
  }, (err, video) =>{
    if (err) {
      res.send(err)
      console.log('video not posted');
    }
    res.json(video);
  })
}
//Query to post Documentary
exports.createDocumentary = (req, res) => {
  Documentary.create({
    title: req.body.title,
    documentaryDes: res.body.documentaryDes,
    documentaryLink: req.body.documentaryLink
  }, (err, documentary) =>{
    if (err) {
      res.send(err)
      console.log('documentary not posted');
    }
    res.json(documentary);
  })
}
//query to post colab
exports.createColaboration = (req, res) => {
  Colaboration.create({
    title: req.body.title,
    colabDes: res.body.colabDes,
    colabLink: req.body.colabLink
  }, (err, colaboration) =>{
    if (err) {
      res.send(err)
      console.log('colaboration not posted');
    }
    res.json(colaboration);
  })
}
// query to post Dox
exports.createDox = (req, res) => {
  Dox.create({
    title: req.body.title,
    doxDesc: res.body.doxDesc,
    doxLink: req.body.doxLink
  }, (err, dox) =>{
    if (err) {
      res.send(err)
      console.log('dox not posted');
    }
    res.json(dox);
  })
}


//Query to get mail
exports.getMail = (req, res) => {
  opusMail.find(function(err, mail){
    if(err){
      throw(err)
      console.log('error getMail');
    }
    res.status(200).json(mail)
  })
}
//Query to get photo
exports.getPhoto = (req, res) => {
  getPhoto.find(function(err, photo){
    if(err){
      throw(err)
      console.log('error getPhoto');
    }
    res.status(200).json(photo)
  })
}
//Query to get video
exports.getVideo = (req, res) => {
  getVideo.find(function(err, video){
    if(err){
      throw(err)
      console.log('error getVideo');
    }
    res.status(200).json(video)
  })
}
//Query to get Documentary
exports.getDocumentary = (req, res) => {
  getDocumentary.find(function(err, documentary){
    if(err){
      throw(err)
      console.log('error getDocumentary');
    }
    res.status(200).json(documentary)
  })
}
//query to get colab
exports.getColab = (req, res) => {
  getColab.find(function(err, colab){
    if(err){
      throw(err)
      console.log('error getColab');
    }
    res.status(200).json(colab)
  })
}
// query to get Dox
exports.getDox = (req, res) => {
  getDox.find(function(err, dox){
    if(err){
      throw(err)
      console.log('error getDox');
    }
    res.status(200).json(dox)
  })
}

/*app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
})*/
