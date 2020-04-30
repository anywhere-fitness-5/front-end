
import React from 'react' 
import PropTypes from 'prop-types'

const Clazz = ({ onClick, className, classDescription, viz, onEdit }) =>

    (<li  style={{visibility: viz}}        >
        <h4>{className} <button onClick={onClick}>delete</button><button onClick={onEdit}>Edit</button></h4>            <p>{classDescription}</p>
    </li>) 
     Clazz.propTypes = {
        onClick: PropTypes.func.isRequired,
        className: PropTypes.string.isRequired,
        classDescription: PropTypes.string.isRequired, 
        viz: PropTypes.bool.isRequired,
        onEdit: PropTypes.func.isRequired
    }
export default Clazz
