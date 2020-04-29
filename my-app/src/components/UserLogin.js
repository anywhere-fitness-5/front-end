import React, { useState, useEffect } from 'react';
import Div from './styled-comp/login-comp.jsx'
import axios from 'axios'
import * as yup from 'yup'

const url = "https://fitness-demo.herokuapp.com/api/login"

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
function Login(props) {
    const [users, setUsers] = useState([])
    const [userValues, setUserValues] = useState(initialFormValues)
    const [formDisabled, setFormDisabled] = useState(true)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    const postUser = user => {
        axios.post(url, user)
            .then(res => {
                setUsers([...users, res.data])
                console.log(res)
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
            username: userValues.username,
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
                </div> {/* login-input-form */}
                <div className='errors'>
                    {errors.password}
                </div>
            </div> {/* login-fields */}
            <button onClick={onSubmit} disabled={disabled}>Let's get moving!</button>

        </Div>
    )
}
export default Login 