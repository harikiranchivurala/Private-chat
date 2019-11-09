const express = require("express");

const app = express();

const server = app.listen(8080);

// const types= require('../src/constants/actionTypes')
// const uuid = require('uuid')
const io = require("socket.io").listen(server);
console.log("listening on port no 8080");

const users = [];
io.on("connection", socket => {
  console.log("socket connected", socket.id);
  socket.on('ADD_USER', (data,callback) => {
    console.log("user data is", data);
    users.push({
        name:data.name,
        id:data.id
    })
    // user={...users}
    // abc={name:[{name:'hari',id:121}]}
    user={users}
    callback(user) 
    
    socket.broadcast.emit('CONN_USER',{name:data.name,id:socket.id})
    // io.sockets.emit('usersList',{users})
  });
  socket.on('private',data=>{
    console.log('data ',data)
    socket.to(data.to).emit('MESSAGE_RECEIVED',{msg:data.msg,from:data.from})
  })
 
//   socket.on("message", message => {
//       const data = JSON.parse(message)
//     console.log("data is", data);
//     switch (data.type) {
//       case "ADD_USER":
//         socket.broadcast.emit("ADD_USER", {
//           type: "ADD_USER",
//           name: data.name,
//           id: data.id
//         });
//         break
//     }
//   });
});
