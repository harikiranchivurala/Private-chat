// import openSocket from "socket.io-client";
import * as types from "../constants/actionTypes";
import { addUser, usersList, messageReceived } from "../actions/index";
import socket from '../staticSocket'
// import uuid from 'uuid'

const setupSocket = (dispatch) => {
  // const socket = openSocket("http://localhost:8080");
  console.log("socket is running");
  socket.on("connect", () => {
    console.log("socket is connected and id is", socket.id);
    socket.on(types.CONN_USER,data=>{
      console.log('connected user is.. ',data)
      dispatch(usersList(data))
      // dispatch(addUser(data.name));
    })
    socket.on('MESSAGE_RECEIVED',data=>{
      console.log('message is',data)
      dispatch(messageReceived(data.msg,data.from))
    })

    // socket.on('usersList',data=>{
    //   console.log('online users are ',data.users);
    // })
  });
  return socket;
};

export default setupSocket