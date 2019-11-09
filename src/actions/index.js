import * as types from "../constants/actionTypes";
import uuid from "uuid";

// let nextUserId=0

export const addUser = name => ({
  type: types.ADD_USER,
  name: name,
  id: uuid.v4()
});
export const addMessage = () => ({
  type: types.ADD_MESSAGE
});
export const messageReceived = (msg,from) => ({
  type: types.MESSAGE_RECEIVED,
  msg,
  from
});
export const usersList = (users) => ({
  type: types.USERS_LIST,
  users
});
