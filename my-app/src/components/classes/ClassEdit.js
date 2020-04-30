 import React from 'react';
 import { connect } from 'react-redux'
 import { editClass, getClasses } from '../actions/Actions'

 function ClassEdit (props) {
    // useEffect (() => {
    //     props.getClasses()
    // },[token])

    const changeHandler = (event) => {
         event.preventDefault();
         this.setState({ [event.target.classname]: event.target.value })
     }

    const cancelHandler = (event) => {
         event.preventDefault()
         this.props.history.goBack()
     }
    const submitHandler = (event) => {
         event.preventDefault();
        //  const { classname, classdescription } = state
         props.editClass(props.match.params.id, { classname: event.target.elements.classname.value, classdescription: event.target.elements.classdescription.value })
     }


    
         console.log("class edit", props)
         const { classes } = props
         return (
             <form onSubmit={submitHandler}>
                     <div>
                         <input
                             type="text"
                             name="classname"
                             placeholder="classname"
                              onChange={changeHandler}
                              value={props.classes.classname}
                         />
                     </div>
                     <div>
                         <input
                             type="text"
                             name="classdesription"
                             placeholder="classdescription"
                              onChange={changeHandler}
                              value={props.classes.classdescription}
                         />
                     
                     </div>
                     <button className = "submitButton" type="submit">Edit Class</button>

             </form>
           
         )
 };
 
 const mapStateToProps = (state) => {
     return {
         classes: state.rootReducer.classes,
         selected: state.rootReducer.selected
     }
 }
 const mapDispatchToProps = {
     editClass,
     getClasses
 }

 export default connect(mapStateToProps, mapDispatchToProps)(ClassEdit);