import React from 'react';
import UserRegister from './Client/ClientRegister';
import InstructorRegister from './Instructors/InstructorRegister';
import Div from './styled-comp/register-comp.jsx'

function Register(props) {


    return (
        <Div>
            <header>
                <h3>Anywhere Fitness</h3>
            </header>
            <img src="/img/fitness-couple.jpg" className="registerImage" alt="Man holding woman up with his feet as she poses" />
            <h2>Sign Up</h2>
            <div class="input-form">
                <label>First Name:&nbsp;
                        <input
                            // value={values.firstname}
                            // onChange={onInputChange}
                            name='username'
                            type='text'
                        /></label>
                <label>Last Name:&nbsp;
                        <input
                            // value={values.lastname}
                            // onChange={onInputChange}
                            name='username'
                            type='text'
                        /></label>
                <label>Username:&nbsp;
                        <input
                            // value={values.username}
                            // onChange={onInputChange}
                            name='username'
                            type='text'
                        /></label>
                    <label>Email:&nbsp;
                        <input
                            // value={values.email}
                            // onChange={onInputChange}
                            name='email'
                            type='text'
                        /></label>
                    <label>Password:&nbsp;
                        <input
                            // value={values.password}
                            // onChange={onInputChange}
                            name='password'
                            type='password'
                        /></label>
            </div>
                      <label>Instructor?:&nbsp;
        <input
                        // checked={values.role}
                        // onChange={onCheckboxChange}
                        name='role'
                        type='checkbox'
                    /></label>

            <button>Confirm</button>
        </Div>
    )
}

export default Register
