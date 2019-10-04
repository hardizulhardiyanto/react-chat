var express = require('express');
var router = express.Router();
let Chat = require('../models/chat');

/**socket.io */
// var http = require('http').Server(express);
// var io = require('socket.io')(http);

/**end */



/* menampillkan data table. */
router.get('/', function (req, res, next) {
    Chat.find().then((data) => {
        console.log("");
        console.log("====== Router Get DataChat =====");
        console.log("");
        console.log("");
        console.log('data get >', req.params);

        res.status(201).json(data);

    });
});

/**Menambahkan data table */
router.post('/add', function (req, res, next) {
    console.log("");
    console.log("====== Router Datachat ADD =====");
    console.log("");
    console.log('data body >', req.body);
    console.log("");
    const { name, message, dateTime } = req.body;

    let chat = new Chat({ name, message, dateTime })
    chat.save().then((chatAdd) => {
        res.status(201).json({
            success: true,
            message: "Data Has Been Added",
            data: {
                _id: chatAdd._id,
                name: chatAdd.name,
                message: chatAdd.message,
                dateTime: chatAdd.dateTime
            }
        });
    })
});

/**Delete data table berdasarkan id */
router.delete('/:id', function (req, res, next) {
    console.log("");
    console.log("====== Router Delete Chat =====");
    console.log("");
    console.log("");
    console.log('data get delete>', req.params);
    console.log("");
    console.log("");


    Chat.findOneAndRemove({ _id: req.params.id }).then((chatRemoved) => {
        res.status(201).json(chatRemoved);
    })
});

/**Socket Connection */
// io.on('connection', function(socket){
//     // socket.on('chat message', function(msg){
//     //   io.emit('chat message', msg);
//     // });
//     console.log('a user connected');
//     socket.on('disconnect', function(){
//       console.log('user disconnected');
//     });
//   });

module.exports = router;
