const mongoose = require('mongoose');

//Connection to heroku
const uri = process.env.MONGODB_URI;

//Global Promise
mongoose.Promise = global.Promise

//var mongoDB = mongoose.connect('mongodb://127.0.0.1/my_database');
mongoose.connect(uri);

const db = mongoose.connection;

//open Connection
db.once('open', function () {
  console.log('Mongodb connection ready');
}).on('error', function(error){
  console.log('DB Connection error:', error);
})

module.exports = db;
