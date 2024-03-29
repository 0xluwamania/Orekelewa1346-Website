import createError, {HttpError} from 'http-errors'
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
import { Request, Response, NextFunction } from "express";


var indexRouter = require('./routes/index');
var tailorsRouter = require('./routes/tailors');
var entryRouter = require('./routes/entry');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/tailors', tailorsRouter);
app.use('/entry', entryRouter);

const connectDB = require("./database/mongoConnection");
connectDB();

// catch 404 and forward to error handler
app.use(function(req: Request, res:Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function(err: HttpError, req: Request, res:Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
