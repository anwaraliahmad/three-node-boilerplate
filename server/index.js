var express = require('express');

var app = express();
var PORT = 3000;

app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.render('index.html');
});


app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
});
