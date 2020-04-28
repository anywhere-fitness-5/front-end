import React, { useState, useEffect } from 'react';
import Div from './styled-comp/register-comp.jsx'
import axios from 'axios'
import * as yup from 'yup'

const url = "https://fitness-demo.herokuapp.com"

const initialFormValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    instructor: false,
}
const initialFormErrors = {
    username: '',
    email: '',
    password: '',
}
const formSchema = yup.object().shape({
    firstname: yup
        .string()
        .min(1, '*first name is required*')
        .required('firstname is required'),
    lastname: yup
        .string()
        .min(1, '*last name is required*')
        .required('lastname is required'),
    username: yup
        .string()
        .min(2, '*username must have at least 2 characters!*')
        .required('username is required'),
    email: yup
        .string()
        .email('*a VALID email is required*')
        .required('email is required'),
    password: yup
        .string()
        .min(6, '*password must have at least 6 characters!*')
        .required('password is required'),
})
function Register(props) {
    const [users, setUsers] = useState()
    const [userValues, setUserValues] = useState(initialFormValues)
    const [formDisabled, setFormDisabled] = useState(true)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const postUser = user => {
        axios.post(url, user)
            .then(res => {
                setUsers([...users, res.data])
                // debugger
            })
            .catch(err => {
                console.log(err)
                debugger
            })
    }

    useEffect(() => {
        formSchema.isValid(userValues)
            .then(valid => {
                setFormDisabled(!valid)
            })
    }, [userValues])

    const onSubmit = evt => {
        evt.preventDefault()

        const newUser = {
            firstname: userValues.firstname,
            lastname: userValues.lastname,
            username: userValues.username,
            email: userValues.email,
            password: userValues.password,
            instructor: Object.keys(userValues.instructor),
        }
        postUser(newUser)
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
        <Form
            values={userValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            disabled={formDisabled}
            errors={formErrors}
        />
    </div>
}
function Form(props) {
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
                <h3>Anywhere Fitness</h3>
            </header>
            <img src="/img/fitness-couple.jpg" className="registerImage" alt="Man holding woman up with his feet as she poses" />
            <h2>Sign Up</h2>
            <div className="field-container">
                <div className='errors'>
                        {errors.username}<br/>
                        {errors.email}<br/>
                        {errors.password}
                </div>
                
                <div className="input-form">
                    <label>First Name:&nbsp;
                            <input
                            value={values.firstname}
                            onChange={onInputChange}
                            name='firstname'
                            type='text'
                        /></label>
                    <label>Last Name:&nbsp;
                            <input
                            value={values.lastname}
                            onChange={onInputChange}
                            name='lastname'
                            type='text'
                        /></label>
                    <label>Username:&nbsp;
                            <input
                            value={values.username}
                            onChange={onInputChange}
                            name='username'
                            type='text'
                        /></label>
                    <label>Email:&nbsp;
                            <input
                            value={values.email}
                            onChange={onInputChange}
                            name='email'
                            type='text'
                        /></label>
                    <label>Password:&nbsp;
                            <input
                            value={values.password}
                            onChange={onInputChange}
                            name='password'
                            type='password'
                        /></label>
                        <label>Instructor?:&nbsp;
        <input
                    checked={values.role}
                    onChange={onCheckboxChange}
                    name='role'
                    type='checkbox'
                /></label>
                </div>
                <div className='errors'>
                        {errors.firstname}<br/>
                        {errors.lastname}
                </div>
            </div>
            

            <button onClick={onSubmit} disabled={disabled}>Confirm</button>
        </Div>
    )
}

export default Register
