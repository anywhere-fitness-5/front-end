import React, { useState, useEffect } from 'react';
import axios from 'axios'
import * as yup from 'yup'

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
    username: yup
        .string()
        .min(2, 'username must have at least 2 characters!')
        .required('username is required'),
    email: yup
        .string()
        .email('a VALID email is required')
        .required('email is required'),
    password: yup
        .string()
        .min(6, 'password must have at least 6 characters!')
        .required('password is required'),
})
const [users, setUsers] = useState([])
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
        username: userValues.username,
        email: userValues.email,
        password: userValues.password,
        instr: Object.keys(userValues.instr),
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

function Form(props) {
    return (
        <div>
            hello
        </div>
    )
}
export default Form