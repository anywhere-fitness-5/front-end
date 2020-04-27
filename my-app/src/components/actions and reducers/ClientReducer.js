import {

    REG_CLIENT_START,
    REG_CLIENT_SUCCESS,
    REG_CLIENT_FAIL,

    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,

    GET_CLASS_LIST_START,
    GET_CLASS_LIST_SUCCESS,
    GET_CLASS_LIST_FAIL,

} from "../store/ClientActions";


const initialState = {
    classes:[]
};

export default function clientReducer(state = intialState, action) {
    switch (action.type) {

//client register
        case REG_CLIENT_START:
            return {
                ...state,
                creatingClient: true,
            }
        case REG_CLIENT_SUCCESS:
            return {
                ...state,
                creatingClient: false,
                error: null,
            }
        case REG_CLIENT_FAIL:
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
        case GET_CLASS_LIST_FAIL:
            return {
                ...state,
                readingClassList: false,
                error: action.payload.message,
            }



        default:
            return state;
    }
}