const express = require('express')
const app = express()
const mongoose = require('mongoose')

var connectionString = 'mongodb://localhost:27017/cs4550-project';
if (process.env.MLAB_USERNAME_WEBDEV) {
    var username = process.env.MLAB_USERNAME_WEBDEV;
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds111598.mlab.com:11598/heroku_tr979zdm';
}

mongoose.connect(connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true })

app.use(function (req, res, next) {
    var allowedOrigins = ['http://cs4550-sp20-g27-client-angular.herokuapp.com', 'http://localhost:4200', 'http://127.0.0.1:9000', 'http://localhost:9000', '66.31.204.180:4200'];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    // res.header("Access-Control-Allow-Origin",
    //     "66.31.204.180");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./controllers/admins.controller.server')(app)
require('./controllers/repository.controller.server')(app)
require('./controllers/users.controller.server')(app)

app.listen(process.env.PORT || 3000)