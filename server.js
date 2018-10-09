const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const employeeController = require('./controllers/employeeController');

const app = express();
app.use(bodyParser.json());
app.use(cors({origin : 'http://localhost:4200'}));
app.use(bodyParser.urlencoded({ extended : false }));
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  //set headers to allow cross origin request.
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });

app.use('/api/employees', employeeController);
app.use('/', (req, res, next) => res.render('index'))

//mongoose connection
mongoose.connect('mongodb://test:Solulab1@ds157539.mlab.com:57539/solulab')
  .then(() => console.log('Database Connected'))
  .catch(err => console.error(err))


app.listen(3000,(err , res) => console.log('server running'))
