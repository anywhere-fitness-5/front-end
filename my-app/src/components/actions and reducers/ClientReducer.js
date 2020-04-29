import {

    REG_START,
    REG_SUCCESS,
    REG_FAILED,

    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,

    GET_CLASS_LIST_START,
    GET_CLASS_LIST_SUCCESS,
    GET_CLASS_LIST_FAILED,

} from "../actions and reducers/ClientActions";


const intialState = {

}

export default function clientReducer(state = intialState, action) {
    switch (action.type) {

//client register
        case REG_START:
            return {
                ...state,
                creatingClient: true,
            }
        case REG_SUCCESS:
            return {
                ...state,
                creatingClient: false,
                error: null,
            }
        case REG_FAILED:
            return {
                ...state,
                creatingClient: false,
                error: action.payload.Error,
            }


// client login            
        case LOGIN_START:
            return {
                ...state,
                loadingLogin: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loadingLogin: false,
                error: null,
                currentUser: action.payload,
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loadingLogin: false,
                error: action.payload.message
            }


// client list            
        case GET_CLASS_LIST_START:
            return {
                ...state,
                readingClassList: true,
            }
        case GET_CLASS_LIST_SUCCESS:
            return {
                ...state,
                readingClassList: false,
                error: null,
                classes: action.payload,
            }
        case GET_CLASS_LIST_FAILED:
            return {
                ...state,
                readingClassList: false,
                error: action.payload.message,
            }



        default:
            return state;
    }
}