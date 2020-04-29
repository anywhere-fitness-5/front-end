import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { instructorClasses } from '../actions and reducers/InstructorActions';
import Classes from '../classes/Classes';
import ClassCreate from '../classes/ClassCreate';
import ClassEdit from '../classes/ClassEdit'

class InstructorDashboard extends React.Component {

    componentDidMount() {
        this.props.instructorClasses(this.props.match.params.id)
    }

    logout = (event) => {
        event.preventDefault()

        localStorage.removeItem('token')
        this.props.history.push('/instructor/login')
    }


    render() {
        const { classes } = this.props;
        return (
            <div className="dashboard">
                <p>Classes </p>
                {this.props.instructorclass.length !== 0 ? this.props.instructorclass.map(classes => (
                    <Classes instructorclass={classes} key={classes.classId} />)):
            </div>
            <div>
                <ClassEdit/>
                <ClassCreate/>
            </div>
        )

    }
}












const mapStateToProps = (state) => {
    return {
        instructorclass: state.instructorReducer.classes,
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(InstructorDashboard))
        
