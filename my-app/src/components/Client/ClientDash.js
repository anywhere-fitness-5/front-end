import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getClasses} from "../actions and reducers/ClientActions"
import Classes from "../classes/Classes";


class Dashboard extends Component {
    componentDidMount() {
        this.props.getClasses(this.props.currentUser[0].id)
    }

    logout = event => {
        event.preventDefault()
        localStorage.removeItem("token");
        this.props.history.push("/login");
    }

    render() {
        console.log("Currentuser",this.props.currentUser);
        return (
            <>
                <button type="button" onClick={this.logout}>Logout</button>
               <p>Class List</p>
                <Classes />
            </>
        )
    }
}

const mapDispatchToProps = {
  getClasses
}

const mapStateToProps = state => {
    return {currentUser: state.clientReducer.currentUser}
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));