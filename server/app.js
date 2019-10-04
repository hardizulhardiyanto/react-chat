var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');


/** socket */
var http = require('http').Server(express);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;




/**end */


const mongoose = require('mongoose')
mongoose.set('useFindmAndModify', false);
mongoose.connect('mongodb://localhost/reactchat', {
    useCreateIndex: true,
    useNewUrlParser: true
});

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dataChatRouter = require('./routes/dataChat');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// get socket
app.get('/', function(req, res){
  res.sendFile(__dirname + 'http://localhost:3000/index.js');
});
// end


// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/dataChat', dataChatRouter);

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

/**Socket Connection */
io.on('connection', function(socket){
  // socket.on('chat message', function(msg){
  //   io.emit('chat message', msg);
  // });
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(port, function(){
  console.log('');
  console.log('========listening on CLIENT >:' + port);
  console.log('');

});

/**end */
module.exports = app;
