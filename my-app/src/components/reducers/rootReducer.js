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

    CREATE_CLASS_START,
    CREATE_CLASS_SUCCESS,
    CREATE_CLASS_FAILED,
    EDIT_CLASS_SUCCESS,
    EDIT_CLASS_FAILED,
    EDIT_CLASS_START,

} from "../actions/Actions";


const intialState = {
    classes: [],
    creatingClient: false,
    error: null,
    loadingLogin: false,
    currentUser: {},
    readingClassList: false,
    createLoading: true,
    createMessage: "",
    createError: "",
    editMessage: "",
    editError:''


}

export default function rootReducer(state = intialState, action) {
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
        console.log("hello") 
        // debugger   
        return {
                
                ...state,
                // readingClassList: false,
                // error: null,
                classes: action.payload,
            }
        case GET_CLASS_LIST_FAILED:
            return {
                ...state,
                readingClassList: false,
                error: action.payload.message,
            }




        case CREATE_CLASS_START: {
            return {
                ...state,
                createLoading: true,
                createMessage: "",
                createError: "",
            }
        }
        case CREATE_CLASS_SUCCESS: {
            return {
                ...state,
                createMessage: "Class Successfully Created",
                createError: "",
                createLoading: false,
            }
        }
        case CREATE_CLASS_FAILED: {
            return {
                ...state,
                createMessage: "",
                createError: "Error. The class name might be a duplicate. Try using a different class name.",
                createLoading: false,
            }
        }

        // edit class            
        case EDIT_CLASS_SUCCESS: {
            return {
                ...state,
                editMessage: "Class successfully updated. Click the cancel button to go back to your Dashboard.",
                editError: "",
            }
        }
        case EDIT_CLASS_FAILED: {
            return {
                ...state,
                editMessage: "",
                editError: "Error. The class name might be a duplicate. Try using a different class name.",
            }
        }
        case EDIT_CLASS_START:{
            return{
                ...state,
                selected: action.id
            }
        }
        default:
            return state
    }
}