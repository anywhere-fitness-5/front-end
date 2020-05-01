import React, { useState, useEffect } from 'react';
import Div from './styled-comp/login-comp.jsx'
import axios from 'axios'
import * as yup from 'yup'
import {connect} from 'react-redux'
import {login} from './actions/Actions'
import { useHistory } from 'react-router-dom'



const initialFormValues = {
    username: '',
    password: '',
    instructor: false,
}
const initialFormErrors = {
    username: '',
    password: '',
}
const formSchema = yup.object().shape({
    username: yup
        .string()
        .min(2, '*username must have at least 2 characters!*')
        .required('username is required'),
    password: yup
        .string()
        .min(6, '*password must have at least 6 characters!*')
        .required('password is required'),
})

function UserLogin(props) {
    let history = useHistory()
    const [users, setUsers] = useState([])
    const [userValues, setUserValues] = useState(initialFormValues)
    const [formDisabled, setFormDisabled] = useState(true)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    

    useEffect(() => {
        formSchema.isValid(userValues)
            .then(valid => {
                setFormDisabled(!valid)
            })
    }, [userValues])

    const onSubmit = evt => {
        evt.preventDefault()
console.log(props)
        const currentUser = {
            username: userValues.username,
            password: userValues.password,
           
        }
        console.log(currentUser)
         props.login(currentUser, history)
        setUserValues(initialFormValues)
    }
    const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        const checked = evt.target.checked

        yup
            .reach(formSchema, name)
            .validate(value)
            .then(valid => {
                setFormErrors({
                    ...formErrors,
                    [name]: '',
                })
            })
            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })

        setUserValues({
            ...userValues,
            [name]: value,
        })
    }
    const onCheckboxChange = evt => {
        const { name } = evt.target
        const isChecked = evt.target.checked

        setUserValues({
            ...userValues,
            instructor: {
                ...userValues.instructor,
                [name]: isChecked,
            }
        })
    }

    return <div>
        <LoginForm
            values={userValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            disabled={formDisabled}
            errors={formErrors}
        />
    </div>
}
function LoginForm(props) {

    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <Div>
            <header>
                <h2>Login</h2>
            </header>
            <img src="/img/swimming.jpg" className="loginImage" alt="people swimming in lanes of a pool" />
            <div className="login-fields">
                <div className='errors'>
                    {errors.username}
                </div>
                <div className="login-input-form">
                    <label>Username:&nbsp;
                                <input
                            value={values.username}
                            onChange={onInputChange}
                            name='username'
                            type='text'
                        /></label>
                    <label>Password:&nbsp;
                                <input
                            value={values.password}
                            onChange={onInputChange}
                            name='password'
                            type='password'
                        /></label>
                    <label>Instructor:&nbsp;
            <input
                            checked={values.role}
                            onChange={onCheckboxChange}
                            name='role'
                            type='checkbox'
                        /></label>
                </div> 
                <div className='errors'>
                    {errors.password}
                </div>
            </div> 
            <button onClick={onSubmit} disabled={disabled}>Let's get moving!</button>

        </Div>
    )
}
const mapStateToProps =(state) => {
    return {
    
    }
    }
    
    const mapDispatchToProps ={
        login
    }
    
    
    export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)