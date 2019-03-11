// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var todoRoutes = require('./routes/todos');

// CREATE & CONFIGURE APP
var app = express();
app.set('view engine', 'ejs');

// USE API ROUTES
app.use('/api/todos', todoRoutes);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

// ROUTES
app.get('/', function(req, res) {
    res.sendFile('index.html');
   });

// LAUNCH APP
app.listen(process.env.PORT || 3000, function() {
    console.log("Server started at " + (process.env.PORT || 3000));
});