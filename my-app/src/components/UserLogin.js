import React from 'react';
import Div from './styled-comp/login-comp.jsx'

const initialFormValues = {
    username: '',
    password: '',
}


function UserLogin(props) {
    return (
        <Div>
            <header>
                <h2>Login</h2>
            </header>
            <img src="/img/swimming.jpg" className="loginImage" alt="people swimming in lanes of a pool" />
            <label>Username:&nbsp;
                        <input
                    // value={values.username}
                    // onChange={onInputChange}
                    name='username'
                    type='text'
                /></label>
            <label>Password:&nbsp;
                        <input
                    // value={values.password}
                    // onChange={onInputChange}
                    name='password'
                    type='password'
                /></label>
            <label>Instructor:&nbsp;
        <input
                    // checked={values.role}
                    // onChange={onCheckboxChange}
                    name='role'
                    type='checkbox'
                /></label>

            <button>Let's get moving!</button>
        </Div>
    )
}
export default UserLogin 