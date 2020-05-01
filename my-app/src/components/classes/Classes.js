import React from 'react';
import Clazz from './Clazz'
import { deleteClass, getClasses, START_EDIT, editClass } from '../actions/Actions';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ClassEdit from './ClassEdit'
import axios from 'axios'


function Classes(props) {



    const deleteHandler = id => {
        console.log(id)
        
        props.deleteClass(id)
            .then(() => {
                props.getClasses(props.match.params.id)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    



    return (
        <div>
            <ul>
                {props.classes.map(classes =>
                    (<Clazz onClick={() => deleteHandler(classes.id)} onEdit={() => editClass(classes.id)}
                        id = {classes.id}
                        key={classes.id}
                        className={classes.classname}
                        classDescription={classes.classdescription}
                        viz={classes.visibility ? classes.visibility : true} />))}




            </ul>
            
        </div>
    )
}



const mapStateToProps = state => {
    return {
        classes: state.rootReducer.classes

    }
}
const mapDispatchToProps = {
    deleteClass,
    getClasses,
    editClass
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Classes));