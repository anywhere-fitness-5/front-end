import React from 'react';
import { connect } from 'react-redux'
import { editClass } from '../actions and reducers/InstructorActions'

class ClassEdit extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        const currentClass = this.props.instructorclasses.filter(current => (current.classId === parseInt(this.props.match.params.id)))
        this.state = {
            name: currentClass[0].name,
            time: currentClass[0].time,
            date: currentClass[0].date,
            length: currentClass[0].length,
            intensity: currentClass[0].intensity,
            location: currentClass[0].location,
            signedUp: currentClass[0].signedUp,
            maxSignedUp: currentClass[0].maxSignedUp,
        }
    }

    changeHandler = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    cancelHandler = (event) => {
        event.preventDefault()
        this.props.history.goBack()
    }
    submitHandler = (event) => {
        event.preventDefault();
        const { name, time, date, length, intensity, location, signedUp, maxSignedUp } = this.state
        this.props.editClass(this.props.match.params.id, { name: name, time: time, date: date, length: length, intensity: intensity, location: location, signedUp: signedUp, maxSignUp: maxSignedUp })
    }


    render(){
        console.log("class edit", this.props)
        const { classes } = this.props
        return (
            <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            onChange={handleChanges}
                            value={this.state.name}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="time"
                            placeholder="time"
                            onChange={handleChanges}
                            value={this.state.time}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="date"
                            placeholder="date"
                            onChange={handleChanges}
                            value={this.state.date}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="length"
                            placeholder="length"
                            onChange={handleChanges}
                            value={this.state.length}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="intensity"
                            placeholder="intensity"
                            onChange={handleChanges}
                            value={this.state.intensity}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="Location"
                            placeholder="Location"
                            onChange={handleChanges}
                            value={this.state.Location}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="SignedUp"
                            placeholder="SignedUp"
                            onChange={handleChanges}
                            value={this.state.SignedUp}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="maxSignedUp"
                            placeholder="maxSignedUp"
                            onChange={handleChanges}
                            value={this.state.maxSignedUp}
                        />
                    </div>
                    <button className = "submitButton" type="submit">Create Class</button>

            </form>
        </div>
        );
};
}
const mapStateToProps = (state) => {
    return {
        instructorclasses: state.instructorReducer.classes,
        editError: state.instructorReducer.editError,
    }
}
const mapDispatchToProps = {
    editClass
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassEdit);