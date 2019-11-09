import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, usersList } from "../actions/index";
import * as types from '../constants/actionTypes'
// import io from 'socket.io-client';
import Message from '../containers/messages/Message'
import socket from '../staticSocket'

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = { login: true };
  }
  render() {
    
    let input;
    
    const handleSubmit = () => {
      // this.props.addUser(input.value);
      this.setState({login:false})
      socket.emit(types.ADD_USER,{name:input.value,id:socket.id},callback=>{
        // callback.map((user,id)=>{
        //   console.log('hello',user.name,'id is',user.id)
        // })
        this.props.usersList(callback.users)
        console.log('users...',callback.users)
      })
      input.value = "";
      // login=false;
    };
    // const handleClick = ()=>{
    //   this.setState({login:false})
    // }
    let login = this.state.login
    return (
      
      <div className="App">
        {/* { login ? <h1 onClick={handleClick}>hello</h1> : <h1>bye</h1> } */}
      
          { login ? 
          <div className="inputtextdesign" id="new-user">
            

            <input
              // onKeyPress={e => {
              //   if (e.key === "Enter") {
              //     this.props.addUser(input.value);
              //     // this.socket.emit('addUser',{type:'addUser',name:input.value,id:this.socket.id})
              //     input.value = "";
              //   }
              // }}
              type="text"
              id="userName"
              placeholder="Enter Name"
              ref={node => {
                input = node;
              }}
            />
          {/* </div>
          <div className="inputsubmitdesign"> */}
            <input type="submit" onClick={handleSubmit} value="Submit" />
          </div>
       : <Message/>
            }
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  usersList: (name ) => {
    dispatch(usersList(name ));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddUser);
