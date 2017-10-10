var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 2555;

app.use(express.static('build'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
  console.log('Chat Site on port ' + port + '!');
});
