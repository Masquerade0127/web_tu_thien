var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var methodOverride = require("method-override");
var expressHbs = require('express-handlebars');
var mysql = require('mysql');
const conn = require('./models/api/db.js');
var app = express();

// Include router
var indexRouter = require('./routes/index');
require('./routes/users.routes')(app);

// Routing
app.use('/', indexRouter);
// app.use('/users', usersRouter);

// Connecting route to database
app.use(function (req, res, next) {
  req.conn = conn;
  next();
});

// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// parse requests of content-type: application/json
app.use(express.json());
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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

const port = 4000;
app.listen(port, () => {
  console.log('server listening on port '+port);
});

module.exports = app;
