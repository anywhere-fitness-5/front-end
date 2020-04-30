import axios from 'axios';



export const REG_START = 'ADD_START';
export const REG_SUCCESS = 'ADD_SUCCESS';
export const REG_FAILED = 'ADD_FAILED';

// reg new client
export function register (newUser) {
    return (dispatch) => {
       dispatch ({type: REG_START});

       return axios 
       .post(`https://fitness-demo.herokuapp.com/api/users/register`,newUser)
       .then ((response) => {
        console.log(response)
        //    dispatch ({ type: REG_SUCCESS, payload: response.data});

       })
       .catch((err) =>{
           dispatch({ type: REG_FAILED, payload: err.response.data });
       })

    }
}

// client login
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export function login (newUser,history) {
    return (dispatch) => {
        dispatch({ type: LOGIN_START });
        history.push('/dashboard')
        return axios
        .post(`https://fitness-demo.herokuapp.com/api/secure/login`, newUser)
        .then ((response) => {
            console.log(response)
             localStorage.setItem('token', response.data.token);
             dispatch ({ type: LOGIN_SUCCESS, payload: response.data.client});
            
        })
        .catch((err) => {
            const payload = err.response ? err.response.data : err;
            dispatch({ type: LOGIN_FAILED, payload });
        })
    }
}

export const GET_CLASS_LIST_START = "GET_CLASS_LIST_START";
export const GET_CLASS_LIST_SUCCESS = "GET_CLASS_LIST_SUCCESS";
export const GET_CLASS_LIST_FAILED = "GET_CLASS_LIST_FAILED";

//class list
export function getClasses() {
    return (dispatch) => {
        dispatch ({type: GET_CLASS_LIST_START});
        
        axios
            .get(`https://fitness-demo.herokuapp.com/api/classes`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then((response) => {
                console.log("axios call classes", response)
                dispatch({type: GET_CLASS_LIST_SUCCESS, payload: response.data});
            })
            .catch((err) => {
                dispatch({type: GET_CLASS_LIST_FAILED, payload: err.response.data});
            })
    }
}

export const CREATE_CLASS_START = 'CREATE_CLASS_START'
export const CREATE_CLASS_SUCCESS = 'CREATE_CLASS_SUCCESS'
export const CREATE_CLASS_FAILED = 'CREATE_CLASS_FAILED'

export function createClass(info) {
    return (dispatch) => {
        dispatch({ type: CREATE_CLASS_START })

        const headers = {
            Authorization: localStorage.getItem('token'),
        }

        console.log("Create Class Info", info, headers)
        
        return axios.post(`https://fitness-demo.herokuapp.com/api/classes/add`, info, { headers })
            .then((res) => {
                console.log("create class", res.data);
                dispatch({ type: CREATE_CLASS_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                console.log("Create Class Error", err.message)
                dispatch({ type: CREATE_CLASS_FAILED})
            })
    }
}

export const EDIT_CLASS_START = 'EDIT_CLASS_START'
export const EDIT_CLASS_SUCCESS = 'EDIT_CLASS_SUCCESS'
export const EDIT_CLASS_FAILED = 'EDIT_CLASS_FAILED'

export function editClass(id, info) {
    return (dispatch) => {
        dispatch({ type: EDIT_CLASS_START })

        const headers = {
            Authorization: localStorage.getItem('token'),
        }

        console.log("Edit Class Info", info)
        
        return axios.put(`https://fitness-demo.herokuapp.com/api/classes/update/:id`, info, { headers })
            .then((res) => {
                console.log("Edit Action", res.data);
                dispatch({ type: EDIT_CLASS_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                console.log("Edit Class Error", err)
                dispatch({ type: EDIT_CLASS_FAILED})
            })
    }
}
export const START_EDIT = id => ({
    type: 'EDIT_CLASS_START',
     id
     
})

export const DELETE_CLASS_START = 'DELETE_CLASS_START'
export const DELETE_CLASS_SUCCESS = 'DELETE_CLASS_SUCCESS'
export const DELETE_CLASS_FAILED = 'DELETE_CLASS_FAILED'

export function deleteClass(id) {
    return (dispatch) => {
        dispatch({ type: DELETE_CLASS_START })

        const headers = {
            Authorization: localStorage.getItem('token'),
        }

        console.log("Delete Class Info", id)

        return axios
            .delete(`https://fitness-demo.herokuapp.com/api/classes/remove/${id}`, { headers })
            .then((res) => {
                dispatch({ type: DELETE_CLASS_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: DELETE_CLASS_FAILED })
            })
    }
}