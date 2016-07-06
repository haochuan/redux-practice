var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 2555;

app.use(express.static('build'));

app.get('*', function(req, res) {
    res.sendFile('index.html');
});

app.listen(port, function () {
    console.log('Chat Site on port ' + port + '!' );
});