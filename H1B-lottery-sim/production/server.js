var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 7488;

app.use(express.static('build'));

app.get('*', function(req, res) {
    res.sendFile('index.html');
});

app.listen(port, function () {
    console.log('H1B lottery Simulator on port ' + port + '!' );
});