import {
    GET_WORD_START,
    GET_WORD_SUCCESS, 
    GET_WORD_FAILED, 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_FAILED,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
    RELOAD,
} from './actions'

const initialState = {
    isLoading: false,
    errorMessage: null,
    created: false,
    word: '',
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_WORD_START: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GET_WORD_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                word: action.payload,
            }
        }
        case GET_WORD_FAILED: {
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.message
            }
        }
        case LOGIN_START: {
			return {
				...state,
				isLoading: true,
			}
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				isLoading: false,
				errorMessage: null,
			}
		}
		case LOGIN_FAILED: {
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload.message,
			}
        }
        case SIGNUP_START: {
			return {
				...state,
				isLoading: true,
			}
		}
		case SIGNUP_SUCCESS: {
			return {
				...state,
                isLoading: false,
                created: true,
				errorMessage: null,
			}
		}
		case SIGNUP_FAILED: {
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload.message,
			}
        }
        case RELOAD: {
            return {
                ...state,
                created: false,
            }
        }
        default:
            return state;
    }
}