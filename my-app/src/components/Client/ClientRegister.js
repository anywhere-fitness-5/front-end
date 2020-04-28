import React from 'react';


const initialFormValues = {
    username: '',
    email: '',
    password: '',
}


function UserRegister(props) {
    return (
        <form className='form container'>
            <h2>Sign Up</h2>
            <div>
                {/* <label>Username:&nbsp;
                    <input
                        value={values.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'
                    /></label><br />
                <label>Email:&nbsp;
                    <input
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='text'
                    /></label><br />
                <label>Password:&nbsp;
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='password'
                    /></label><br /> */}
            </div>
        </form>
    )
}
export default UserRegister