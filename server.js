const express = require('express');
const app = express();
const path = require('path');
require('./node_server/data/db')();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

require('./node_server/controllers/quizzes.controller.server')(app)
require('./node_server/controllers/question.controller.server')(app)
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./node_server/controllers/quizzes.controller.server')(app)
require('./node_server/controllers/question.controller.server')(app)
require('./node_server/controllers/quiz-attempts.controller.server')(app)

app.use(express.static(__dirname + '/dist/wbdv-angular'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/wbdv-angular/index.html'));});

app.listen(process.env.PORT || 8080);
