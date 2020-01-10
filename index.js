var express = require('express');
var app= express();
var io=require('socket.io')();


app.get('/',function(req,res){
    res.sendFile(__dirname+"/public/index.html");
})

var hserver=app.listen(process.env.port||8080,()=>{
    console.log("Server is listening on port 8080");
})

io.listen(hserver);

io.on('connection',function(socket){
    console.log("User is connected");
     //socket.send("Highway to Browser");
     socket.join("chatroom");
 
     socket.on('sendMessage',(payload)=>{io.in("chatroom").emit('message',payload)});
     socket.on('disconnect',function(){
         console.log("User disconnected");
     })
});
// var express = require("express");
// var io = require("socket.io")();
// var app = express();

// app.get("/",(req,res) => {
// res.sendFile(__dirname + "/public/index.html");
// });

// var hserver = app.listen(8000,() => console.log("Server Started at 8000"));

// io.listen(hserver);

// io.on('connection',function(socket) {
// console.log("User Connected")
// socket.send("Highway to browser");
// socket.on('disconnect',() => console.log("User Disconnected"));
// });