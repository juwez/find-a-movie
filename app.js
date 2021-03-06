const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const actorRouter = require('./controller/actorController');
const genreRouter = require('./controller/genreController');
const movieRouter = require('./controller/movieController');
const filterRouter = require('./controller/filterController');
const cors = require("cors");
const app = express();
const fs = require('fs');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('common', {
    stream: fs.createWriteStream('./textDir/endpointLogs.txt', {flags: 'a'})
}));
app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/api/movies/',movieRouter);
app.use('/api/actors/',actorRouter);
app.use('/api/genres/',genreRouter);
app.use('/api/filters/',filterRouter);


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
