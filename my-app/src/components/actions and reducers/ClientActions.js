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

export function login (username, password) {
    return (dispatch) => {
        dispatch({ type: LOGIN_START });
        
        return axios
        .post(`https://fitness-demo.herokuapp.com/api/users/login`, {username, password})
        .then ((response) => {
            console.log(response)
            // localStorage.setItem('token', response.data.token);
            // dispatch ({ type: LOGIN_SUCCESS, payload: response.data.client});
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
export function getClasses(id) {
    return (dispatch) => {
        dispatch ({type: GET_CLASS_LIST_START});
        
        axios
            .get(``, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then((response) => {
                dispatch({type: GET_CLASS_LIST_SUCCESS, payload: response.data});
            })
            .catch((err) => {
                dispatch({type: GET_CLASS_LIST_FAILED, payload: err.response.data});
            })
    }
}