var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bp = require('body-parser')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const connection = 'mongodb+srv://kevin:kevin@cluster0.04rqq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
var app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(connection, (err,res) => {
  if(err) console.log('Error de conexion con bbdd');
  console.log('Conexión satisfactoria.');
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
