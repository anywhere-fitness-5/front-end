import React, { useEffect } from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getClasses} from "./actions/Actions"
import Classes from "./classes/Classes";
// import ClassCreate from './classes/ClassCreate';
// import ClassEdit from './classes/ClassEdit'



function Dashboard (props) {
    // componentDidMount() {
    //     this.props.getClasses()
    // }
     const token = localStorage.getItem('token')
    useEffect (() => {
        props.getClasses()
    },[token])
    // logout = event => {
    //     event.preventDefault()
    //     localStorage.removeItem("token");
    //     this.props.history.push("/login");
    // }

   
        console.log("state",props.classes);
       
        return (
            <>
                {/* <button type="button" onClick={this.logout}>Logout</button> */}
               <p>Class List</p>
                  { (props.classes.length  === 0) ? null :
                <Classes classes={props.classes} key={props.classes.length}/>
               }   
                
                {/* <ClassEdit />
                <ClassCreate /> */}
            </>
        )
    }


const mapDispatchToProps = {
  getClasses
  
}

const mapStateToProps = state => {
    
     return {
          classes: state.rootReducer.classes
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));