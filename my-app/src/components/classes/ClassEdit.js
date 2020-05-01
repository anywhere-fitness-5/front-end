 import React, { useState } from 'react';
 import { connect } from 'react-redux'
 import { editClass, getClasses } from '../actions/Actions'
import {useParams} from "react-router-dom"


 function ClassEdit (props) {
    // useEffect (() => {
    //     props.getClasses()
    // },[token])
const [form, setForm]= useState({
    classname: '',
    classdescription: '',
    id: Date.now()
})
    
    const changeHandler = (event) => {
        //   event.preventDefault();
        //  setForm({ [event.target.name]: event.target.value })
        setForm({
           ...form,
           [event.target.name]: event.target.value 
        })
     }

    // const cancelHandler = (event) => {
    //      event.preventDefault()
    //      this.props.history.goBack()
    //  }
    const submitHandler = (event) => {
         event.preventDefault();
        //  const { classname, classdescription } = state
        console.log(props)
        props.editClass(form.id, { classname: form.classname, classdescription: form.classdescription })
     }

let {id} = useParams()
console.log(id)

const matchClass = () => {
    if(form.classname.length <= 0){
    for (let i=0; i<props.classes.length; i++){
        
        if (props.classes[i].id === parseInt(id)){
            form.classname=props.classes[i].classname
            form.classdescription=props.classes[i].classdescription
            form.id=props.classes[i].id

           
        }}
    }
}
matchClass()

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
                              value={form.classname}
                         />
                     </div>
                     <div>
                         <input
                             type="text"
                             name="classdesription"
                             placeholder="classdescription"
                              onChange={changeHandler}
                              value={form.classdescription}
                         />
                     
                     </div>
                     <button className = "submitButton" type="submit">Edit Class</button>

             </form>
           
         )
 };
 
 const mapStateToProps = (state) => {
    console.log('HIIII',mapDispatchToProps) 
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