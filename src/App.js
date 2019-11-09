import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/loginpage/AddUser';
import './components/loginpage/loginpage.css';
import AddUser from './containers/AddUser'
import Message from './containers/messages/Message';
import { connect } from 'react-redux'

// import './containers/messages/message.css'
// const Messages=(props)=>{
//   if(props.value){
//     return <Login/>
//   }
//   return <Message/>
// }
class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={login:true}
  // }
  // handleClick=()=>{
  //   this.setState({
  //     value:!this.state.value 
  //   })
  // }
  render() {
    // let login=true
    return (
      <div>
       
        <AddUser/>
       
    </div>
    )
  }
}
const mapStateToProps= state=>({
  login:state.login
})
export default connect(mapStateToProps,null)(App);
