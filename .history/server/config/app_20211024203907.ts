import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

import indexRouter from '../routes/index';

//not a var to const change
const indexRouter = require('../routes/index');

// DB Configuration
import * as DBConfig from './db';
//Instantiate Mongo
mongoose.connect('mongodb://localhost:27017/book_store');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log("connected to MongoDB at localhost:27017")
});


//Instantiate Express
const app = express();
export default app;

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

//Router Middleware
app.use('/', indexRouter);
app.use('/contact', contactRouter);


// catch 404 and forward to error handler
app.use(function(req:express.Request, res:express.Response, next:express.NextFunction) {
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next:express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;
