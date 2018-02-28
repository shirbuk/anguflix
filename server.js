var express = require('express');

var app = express();

app.use(express.static(__dirname+'/dist'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });


app.listen(process.env.PORT || '8080', function () {
    console.log("what do you want from me! get me on 8080 ;-)");
  });