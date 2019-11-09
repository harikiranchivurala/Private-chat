import * as types from "../constants/actionTypes";

const messages = (state = [], action) => {
  switch (action.type) {
    // case types.ADD_USER:
    //   return state.concat([{ name: action.name, id: action.id }]);
    case types.MESSAGE_RECEIVED:
      // return state.concat([{users:action.users}])
      // return {...state, login:false,users:action.users}
      return state.concat( {message:action.msg,sender:action.from})
    default:
      return state;
  }
};

export default messages;
