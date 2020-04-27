import axios from 'axios';



export const INSTRUCTOR_LOGIN_START = 'INSTRUCTOR_LOGIN_START'
export const INSTRUCTOR_LOGIN_SUCCESS = 'INSTRUCTOR_LOGIN_SUCCESS'
export const INSTRUCTOR_LOGIN_FAILED = 'INSTRUCTOR_LOGIN_FAILED'

export function instructorLogin(username, password) {
    return (dispatch) => {
        dispatch({ type: INSTRUCTOR_LOGIN_START })

        return axios
        .post(``, {username, password})
            .then((res) => {
                console.log("Login Success", res)
                localStorage.setItem('token', res.data.token)
                dispatch({ type: INSTRUCTOR_LOGIN_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: INSTRUCTOR_LOGIN_FAILED })
            })
    }
}


export const INSTRUCTOR_REGISTER_START = 'INSTRUCTOR_REGISTER_START'
export const INSTRUCTOR_REGISTER_SUCCESS = 'INSTRUCTOR_REGISTER_SUCCESS'
export const INSTRUCTOR_REGISTER_FAILED = 'INSTRUCTOR_REGISTER_FAILED'

export function instructorRegister(fistName,lastName, username, password) {
    return (dispatch) => {
        dispatch({ type:INSTRUCTOR_REGISTER_START })

        return axios
        .post(``, { fistName,lastName, username, password })
            .then((res) => {
                console.log(res);
                dispatch({ type: INSTRUCTOR_REGISTER_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                console.log("Create Class Error", err);
                dispatch({ type: INSTRUCTOR_REGISTER_FAILED })
            })
    }
}



export const INSTRUCTOR_CLASSES_START = 'INSTRUCTOR_CLASSES_START'
export const INSTRUCTOR_CLASSES_SUCCESS = 'INSTRUCTOR_CLASSES_SUCCESS'
export const INSTRUCTOR_CLASSES_FAILED = 'INSTRUCTOR_CLASSES_FAILED'

export function instructorClasses(id) {
    return (dispatch) => {
        dispatch({ type: INSTRUCTOR_CLASSES_START })

        const headers = {
			Authorization: localStorage.getItem('token'),
		}

        axios.get(``, { headers })
            .then((res) => {
                dispatch({ type: INSTRUCTOR_CLASSES_SUCCESS, payload: res.data})
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: INSTRUCTOR_CLASSES_FAILED})
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
        
        return axios.post(``, info, { headers })
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
        
        return axios.put(``, info, { headers })
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
            .delete(``, { headers })
            .then((res) => {
                dispatch({ type: DELETE_CLASS_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: DELETE_CLASS_FAILED })
            })
    }
}