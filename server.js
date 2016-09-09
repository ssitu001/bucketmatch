const express = require('express');
const app = express();


app.get('/', function(req, res){
  res.sendFile(__dirname + '/build/bundle.js');
})

app.listen(3000);