const express = require('express');
const app = express();
const userCtrl = require('./server-sql/controllers/user-controller');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/build/bundle.js');
})

app.get('/test', userCtrl.index);
app.post('/add', userCtrl.add, (req, res) => { res.end() });

app.listen(3000, () => {
  console.log('listening on port 3000')
});