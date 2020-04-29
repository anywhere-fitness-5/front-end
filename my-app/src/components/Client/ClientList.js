import React from "react";
import { connect } from "react-redux";

function ClientList(props) {
    return (
        <div>
            {props.error && <p className="error">{props.error}</p>}
            <div>
                {props.clients.map(item => {
                    return (
                        <p key={item.id}>Name: {item.name} Email: {item.email}</p>
                    )
                })}
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        clients: state.clientReducer.clients,
        creatingClients: state.creatingClients, 
        readingClients: state.readingClients,
        updatingClients: state.updatingClients,
        deletingClients: state.deletingClients,
        error: state.error,
    }
}
export default connect(mapStateToProps)(ClientList);