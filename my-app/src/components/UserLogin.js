import React from 'react';


const initialFormValues = {
    username: '',
    email: '',
    authenticationCode: '',
    website: '',
}


function UserLogin(props) {
    return (
        <div>
            <h2>Sign Up</h2>

            {/* <MakeForm
                values={userValues}
                onInputChange={onInputChange}
                onSubmit={onSubmit}
                disabled={formDisabled}
                errors={formErrors}
            /> */}
        </div>
    )
}
export default UserLogin 