import React from 'react';
import { connect } from 'react-redux';
import { createClass, getClasses } from '../actions/Actions';
import { withRouter } from 'react-router-dom';

function ClassesCreate(props) {



    const handleChanges = (event) => {

        console.log(props.cls)

        this.setState({ [event.target.name]: event.target.value })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event.target.elements.classname.value)

        props.createClass({ classname: event.target.elements.classname.value, classdescription: event.target.elements.classdescription.value })
            .then(() => {
                props.getClasses(props.match.params.id)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    console.log("Create", props)
    const { classes } = props

    return (
        <ul>
            <form onSubmit={submitHandler}>


                <div>
                    <input
                        type="text"
                        name="classname"
                        placeholder="classname"

                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="classdescription"
                        placeholder="classdescription"

                    />
                    <button className="submitButton" type="submit">Create Class</button>
                </div>
            </form>
        </ul>
    );
};


const mapStateToProps = (state) => {
    return {
        classes: state.rootReducer.classes,
        cls: { classname: '', classdescription: '' }

    }
}
const mapDispatchToProps = {
    createClass,
    getClasses
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClassesCreate));