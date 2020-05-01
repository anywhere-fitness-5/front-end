
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const Clazz = ({ id, onClick, className, classDescription, viz, onEdit }) =>

    (<li style={{ visibility: viz }}        >
        <h4>{className}
            <button onClick={onClick}>Delete</button>
            <Link to={`/edit/${id}`} > 
            Edit
            </Link>
        </h4>
        <p>{classDescription}</p>
    </li>)



Clazz.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    classDescription: PropTypes.string.isRequired,
    viz: PropTypes.bool.isRequired,
    onEdit: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}
export default Clazz
