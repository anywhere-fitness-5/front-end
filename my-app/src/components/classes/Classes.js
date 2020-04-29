import React from 'react';
//  import { axiosWithAuth } from '../../utils/axiosWithAuth';
 import { deleteClass, instructorClasses } from '../actions and reducers/InstructorActions';
 import { connect } from 'react-redux';
 import { Link, withRouter } from 'react-router-dom';

const mapDispatchToProps = {
    deleteClass,
    instructorClasses,
}

 class Classes extends React.Component{

    deleteHandler = (event) => {
        event.preventDefault()
        this.props.deleteClass(this.props.instructorClass.classId)
        .then(() => {
            this.props.instructorClasses(this.props.match.params.id)
        })
        .catch((err) => {
            console.log(err)
        })
    }



     render(){
         
        return(
            <div className="classes">
                <h2>Class List</h2>
                    <p>Class Name: {this.props.instructorClasses.classname} </p>
                    <p>Class Time: {this.props.instructorClasses.classTime} </p>
                    <p>Class Date: {this.props.instructorClasses.classDate} </p>
                    <p>Class Length: {this.props.instructorClasses.classLength} </p>
                    <p>Class Intensity: {this.props.instructorClasses.classIntensity} </p>
                    <p>Class Location: {this.props.instructorClasses.classLocation} </p>
                    <p>Number of Members Signed Up: {this.props.instructorClasses.class} </p>
                    <p>Max Number of Members Signed Up: {this.props.instructorClasses.class} </p>
            </div>
        )
    }

}



 
export default withRouter(connect(null, mapDispatchToProps) (Classes));