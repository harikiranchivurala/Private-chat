import React, { Component } from "react";
import { connect } from "react-redux";
import download from "../../assets/user.png";
import "../../containers/messages/message.css";
import socket from "../../staticSocket";
import { messageReceived } from "../../actions";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { socketId: "" };
  }

  render() {
    let input;
    let socketId = this.state.socketId;
    const privateUserHandler = (user, id) => {
      this.setState({ socketId: id });
      // console.log('username',user,'id is',id)
    };

    const sendMessageHandler = () => {
      socket.emit("private", {
        msg: input.value,
        to: socketId,
        from: socket.id
      });
      this.props.send(input.value,'Me')
      input.value = "";
    };

    // console.log("state is ", this.props.users);
    console.log("socket id", socketId);
    return (
      <div className="App">
        <div id="container">
          <aside id="sidebar" className="sidebar">
            <div className="se">Users</div>

            <div>
              <button className="so">
                <input type="text" placeholder="Search here" />
              </button>
            </div>

            <div>
              {this.props.users.map((users, id) => {
                return (
                  <button
                    className="si"
                    key={id}
                    onClick={() => privateUserHandler(users.name, users.id)}
                  >
                    <img src={download} alt="" width="25px" height="25px" />{" "}
                    {users.name}
                  </button>
                );
              })}
            </div>
          </aside>

          <section id="main">
            <section id="message-list">
              <div>User Name</div>
              {this.props.message.map((message, id) => {
                return <div key={id}>{message.sender} :{message.message}</div>;
              })}
            </section>
            <section id="new-message">
              >
              <div className="text">
                <input
                  type="text"
                  id="message"
                  placeholder="type something..."
                  ref={node => {
                    input = node;
                  }}
                />
                <input
                  type="submit"
                  value="Send"
                  onClick={sendMessageHandler}
                />
              </div>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users,
  message: state.messages
});
const mapDispatchToProps= dispatch => ({
  send:(msg,from) =>{
    dispatch(messageReceived(msg,from))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
