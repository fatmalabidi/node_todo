import express from 'express'
import mongoose from 'mongoose'
import config from './config/index.js'
import setupController from './controllers/setupController.js'
import apiController from './controllers/apiController.js'

var app = express();

// [process] provided by node to read envirement variables 
var port = process.env.PORT || 3000

// use middleware static files
// app.use('/whatever', express.static('./public'))
// go to public folder when we request the home page'/'
app.use('/', express.static('./public'));

// the express framework by default looks for ejs in views folder
//ejs file extention: Embedded JavaScript templating.
app.set('view engine', 'ejs');

//connect to the database: mongodb is a single connectio (will keep open)
mongoose.connect(config.getDbConnectionString());

setupController(app);
apiController(app);

app.listen(port);