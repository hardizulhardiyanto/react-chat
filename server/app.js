var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var router = express.Router();




/** socket */
const app = express();
const http = require("http").Server(app);

// require the socket.io module
// const io = require("socket.io");

//Port from environment variable or default - 4001
const clientPort = 3002;

// database connected
let Chat = require('./models/chat');
let connect = require('./models/dbconnect');



//Setting up express and adding socketIo middleware

const connectSocket = http.listen(clientPort);

const io = require('socket.io')(connectSocket);

io.on("connection", socket => {

  socket.on('send-message', msg => {

    console.log('Socket send-message >', msg);

 

    io.emit('receive-message', msg);



  });

  socket.on('delete-message', () => {
    console.log('success delete');
    io.emit('receive-dm');


  })
});


/**end */




// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dataChatRouter = require('./routes/dataChat');


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
app.get('/', function (req, res) {
  res.sendFile(__dirname + 'http://localhost:3000/index.js');
});

var port = 3000;
console.log("");
console.log('CLIENT PORT render> ', port);
console.log("");




// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/dataChat', dataChatRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});






module.exports = app;
