import axios from 'axios';


export const REG_CLIENT_START = 'ADD_CLIENT_START';
export const REG_CLIENT_SUCCESS = 'ADD_CLIENT_SUCCESS';
export const REG_CLIENT_FAIL = 'ADD_CLIENT_FAIL';

// reg new client
export function registerClient (newclient) {
    return (dispatch) => {
       dispatch ({type: REG_CLIENT_START});

       return axios 
       .post(``,newclient)
       .then ((response) => {
           dispatch ({ type: REG_CLIENT_SUCCESS, payload: response.data});
       })
       .catch((err) =>{
           dispatch({ type: REG_CLIENT_FAIL, payload: err.response.data });
       })

    }
}

// client login
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export function login (username, password) {
    return (dispatch) => {
        dispatch({ type: LOGIN_START });
        
        return axios
        .post(``, {username, password})
        .then ((response) => {
            localStorage.setItem('token', response.data.token);
            dispatch ({ type: LOGIN_SUCCESS, payload: response.data.client});
        })
        .catch((err) => {
            const payload = err.response ? err.response.data : err;
            dispatch({ type: LOGIN_FAIL, payload });
        })
    }
}

export const GET_CLASS_LIST_START = "GET_CLASS_LIST_START";
export const GET_CLASS_LIST_SUCCESS = "GET_CLASS_LIST_SUCCESS";
export const GET_CLASS_LIST_FAIL = "GET_CLASS_LIST_FAIL";

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
                dispatch({type: GET_CLASS_LIST_FAIL, payload: err.response.data});
            })
    }
}