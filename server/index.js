const app = require('./config.js');

var port = process.env.PORT || 3000;


app.listen(port, function() {
    console.log('listening on port 3000!');
});
