// import React from 'react';
// import { connect } from 'react-redux';
// import { createClass, instructorClasses } from '../actions/InstructorActions';
// import { withRouter } from 'react-router-dom';

// class ClassesCreate extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: "",
//             time: "",
//             date: "",
//             length: "",
//             intensity: "",
//             location: "",
//             signedUp: "",
//             maxSignedUp: "",

//         }
//     }
//     handleChanges = (event) => {
//         event.preventDefault();
//         this.setState({ [event.target.name]: event.target.value })
//     }

//     submitHandler = (event) => {
//         event.preventDefault();
//         const { name, time, date, length, intensity, location, signedUp, maxSignedUp } = this.state
//         this.props.createClass({ name: name, time: time, date: date, length: length, intensity: intensity, location: location, signedUp: signedUp, maxSignUp: maxSignedUp })
//             .then(() => {
//                 this.props.instructorClasses(this.props.match.params.id)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//         this.setState({
//             name: '',
//             time: '',
//             date: '',
//             length: null,
//             intensity: '',
//             location: '',
//             signedUp: '',
//             maxSignedUp: ''
//         })
//     }
//     render() {
//         console.log("Create", this.state)
//         const { classes } = this.props
//         return (
//             <div>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="name"
//                             onChange={handleChanges}
//                             value={this.state.name}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             name="time"
//                             placeholder="time"
//                             onChange={handleChanges}
//                             value={this.state.time}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             name="date"
//                             placeholder="date"
//                             onChange={handleChanges}
//                             value={this.state.date}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             name="length"
//                             placeholder="length"
//                             onChange={handleChanges}
//                             value={this.state.length}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             name="intensity"
//                             placeholder="intensity"
//                             onChange={handleChanges}
//                             value={this.state.intensity}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             name="Location"
//                             placeholder="Location"
//                             onChange={handleChanges}
//                             value={this.state.Location}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             name="SignedUp"
//                             placeholder="SignedUp"
//                             onChange={handleChanges}
//                             value={this.state.SignedUp}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="text"
//                             name="maxSignedUp"
//                             placeholder="maxSignedUp"
//                             onChange={handleChanges}
//                             value={this.state.maxSignedUp}
//                         />
//                     </div>
//                     <button className = "submitButton" type="submit">Create Class</button>

//             </form>
//         </div>
//     );
// };
// }
// const mapStateToProps = (state) => {
//     return {
    
//         instructorFullname: state.instructorReducer.instructorFullname,
//         instructorUsername: state.instructorReducer.instructorUsername,
        
//     }
// }
// const mapDispatchToProps = {
//     createClass,
//     instructorClasses
// }
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClassesCreate));