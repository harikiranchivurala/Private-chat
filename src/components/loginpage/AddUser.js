// import React from "react";
// import PropTypes from "prop-types";
// import {addUser} from '../../actions/index'
// import "../messageapplication/messageapplication.css";
// import { connect } from "react-redux";

// const AddUser = (props) => {
//   let input;
//   const handleSubmit = () => {
//     // e.preventDefault();
//     props.dispatch(input.value, "111");
//     input.value = "";
//   };

//   // const { addUser = () => {} } = props;

//   return (
//     <div className="App">
//       <div className="textdesign" id="new-user">
//         {/* <form onSubmit={handleSubmit}> */}
//         <form  >
//           <input
//             onKeyPress={e => {
//               if (e.key === "Enter") {
//                 props.addUser(input.value, "111");
//                 input.value = "";
//               }
//             }}
//             type="text"
//             placeholder="Enter Name"
//             ref={node => {
//               input = node;
//             }}
//           />
//           {/* </div>
//       <div className="submitdesign"> */}
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     </div>
//   );
// };
// AddUser.PropTypes = {
//   dispatch: PropTypes.func.isRequired
// };

// const mapDispatchToProps=dispatch=>({
//   addUser:(name,id)=>{
//       dispatch(addUser(name,id))
//   }
// })
// // export default AddUser;
// export default connect(null,mapDispatchToProps)(AddUser)
