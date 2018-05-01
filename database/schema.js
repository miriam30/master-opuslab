const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema table to store messages
const mailSchema = mongoose.Schema({
  name: String,
  companyName: String,
  description: String,
  dueDate: String,
  phone: Number,
  email: String
})

//schema table for Photo Portfolio
const photoSchema = mongoose.Schema({
  title: String,
  imgLink: String
})

//schema table for Video Portfolio
const videoSchema = mongoose.Schema({
  title: String,
  videoLink: String
})

//schema table for Documentaries
const documentarySchema = mongoose.Schema({
  title: String,
  documentaryDes: String,
  documentaryLink: String
})

//Schema table for Colaboration
const colabSchem = mongoose.Schema({
  title: String,
  colabDes: String,
  colabLink: String
})

//Schema table for PDF
const doxSchema = mongoose.Schema({
  title: String,
  doxDesc: String,
  doxLink: String
})


exports.Mail = mongoose.model('mail', mailSchema);
exports.Photo = mongoose.model('photo', photoSchema)
exports.Video = mongoose.model('video', videoSchema);
exports.Documentary = mongoose.model('documentary', documentarySchema);
exports.Colaboration = mongoose.model('colaboration', colabSchem);
exports.Dox = mongoose.model('dox', doxSchema);
//var Mail = mongoose.model('Mail', mailSchema);
//module.exports = Mail
