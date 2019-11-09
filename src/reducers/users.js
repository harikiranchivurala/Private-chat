import * as types from "../constants/actionTypes";

const users = (state = [], action) => {
  switch (action.type) {
    // case types.ADD_USER:
    //   return state.concat([{ name: action.name, id: action.id }]);
    case types.USERS_LIST:
      // return state.concat([{users:action.users}])
      // return {...state, login:false,users:action.users}
      return state.concat(action.users)
    default:
      return state;
  }
};

export default users;
