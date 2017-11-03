const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes/frontendRoutes');



// initialize express
const app = express();

// connect to mongodb
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/studentdb', {useMongoClient : true});
// mongoose.connect('mongodb://alc:alc@ds149433.mlab.com:49433/studentdb');



// set up engine
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "views"));
// set up stattic files
app.use(express.static('./public'));

// middleware
app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({extended: true}));

// error handling
app.use(function (err, req, res, next) {
  res.status(422).json({error: err.message});
});



app.use('/', router);





const port =process.env.PORT || 5000;
app.listen(port);
console.log('server started on port: ' + port );

