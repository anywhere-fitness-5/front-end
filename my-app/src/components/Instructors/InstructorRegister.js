import React from 'react';


const initialFormValues = {
    username: '',
    email: '',
    password: '',
    authenticationCode: '',
    website: '',
}


function InstructorRegister(props) {
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
                    /></label><br />
                <label>Authentication Code:&nbsp;
                    <input
                        value={values.code}
                        onChange={onInputChange}
                        name='code'
                        type='text'
                    /></label><br />
                <label>Website:&nbsp;
                    <input
                        value={values.website}
                        onChange={onInputChange}
                        name='website'
                        type='text'
                    /></label><br /> */}
            </div>
        </form>
    )
}
export default InstructorRegister