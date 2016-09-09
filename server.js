const express = require('express');
const app = express();
const eventCtrl = require('./server-sql/controllers/event-controller');


app.get('/', function(req, res){
  res.sendFile(__dirname + '/build/bundle.js');
})

app.get('/test', eventCtrl.index);

app.listen(3000, () => {
  console.log('listening on port 3000')
});