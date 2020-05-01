import React from 'react';

import { deleteClass, getClasses } from '../actions/Actions';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';



function Classes (props) {

    // constructor(props) {
    //     super(props);

    //     // this.state = {
    //     //     classes: [],
    //     // };
    // }

    // deleteHandler = (event) => {
    //     event.preventDefault()
    //     this.props.deleteClass(this.props.getClasses.classId)
    //         .then(() => {
    //             this.props.getClasses(this.props.match.params.id)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }



    // render() {

        return (

            <ul>
                {props.classes.map(classes => <h4>{classes.classname}</h4>)}


            </ul>


        )
    }


/* <p>Class Name: {this.props.getClasses.classname} </p>
<p>Class Time: {this.props.getClasses.classTime} </p>
 <p>Class Date: {this.props.getClasses.classDate} </p> */
/* <p>Class Length: {this.props.getClasses.classLength} </p>
<p>Class Intensity: {this.props.getClasses.classIntensity} </p>
<p>Class Location: {this.props.getClasses.classLocation} </p>
<p>Number of Members Signed Up: {this.props.getClasses.class} </p>
<p>Max Number of Members Signed Up: {this.props.getClasses.class} </p> */
const mapStateToProps = state => {
    return {
        // classes: state.rootReducer.classes

    }
}
const mapDispatchToProps = {
    // deleteClass,
    // getClasses,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Classes));