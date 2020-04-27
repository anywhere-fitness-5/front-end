import { 
    INSTRUCTOR_LOGIN_SUCCESS,
    INSTRUCTOR_LOGIN_START,
    INSTRUCTOR_LOGIN_FAILED,
    INSTRUCTOR_REGISTER_START,
    INSTRUCTOR_REGISTER_SUCCESS,
    INSTRUCTOR_REGISTER_FAILED,
    INSTRUCTOR_CLASSES_SUCCESS,
    CREATE_CLASS_START,
    CREATE_CLASS_SUCCESS,
    CREATE_CLASS_FAILED,
    EDIT_CLASS_SUCCESS,
    EDIT_CLASS_FAILED,
     } from '../store/InstructorActions'

     const initialState = {
         classes:[]
     };

     export default function instructorReducer(state = initialState, action) {
        switch (action.type) {
//login
            case INSTRUCTOR_LOGIN_START: {
                return {
                    ...state,
                    instructorLoading: true,
                    instructorError: "",
                    createMessage: "",
                }
            }
            case INSTRUCTOR_LOGIN_SUCCESS: {
                console.log("Login", action.payload.instructor[0])
                return {
                    ...state,
                    instructorId: action.payload.instructor[0].id,
                    instructorFullname: action.payload.instructor[0].fullname,
                    instructorUsername: action.payload.instructor[0].username,
                    instructorMessage: `Welcome Instructor ${action.payload.instructor[0].fullname}`,
                    instructorLoading: false,
                    instructorError: "",
                }
            }
            case INSTRUCTOR_LOGIN_FAILED: {
                return {
                    ...state,
                    instructorError: "Invalid",
                    instructorMessage: "",
                    instructorLoading: false,
                }
            }

// register            
            case INSTRUCTOR_REGISTER_START: {
                return {
                    ...state,
                    registerError: "",
                    registerMessage: "",
                }
            }
            case INSTRUCTOR_REGISTER_SUCCESS: {
                return {
                    ...state,
                    registerError: "",
                    registerMessage: "Account created successfully!"
                }
            }
            case INSTRUCTOR_REGISTER_FAILED: {
                return {
                    ...state,
                    registerError: "This username already exists. Please choose a different username",
                    registerMessage: "",
                }
            }

//classes            
            case INSTRUCTOR_CLASSES_SUCCESS: {
                console.log("Classes Success", action.payload)
                return {
                    ...state,
                    classes: action.payload,
                    editMessage: "",
                    editError: "",
                }
            }

//class list
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
            default:
                return state
        }
    }