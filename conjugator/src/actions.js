import axios from 'axios';

export const RELOAD = 'RELOAD';

// our loading state - sets to this immediately
export const GET_WORD_START = 'GET_WORD_START';
// if the request completes successfully
export const GET_WORD_SUCCESS = 'GET_WORD_SUCCESS';
// if the request fails
export const GET_WORD_FAILED = 'GET_WORD_FAILED';

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const SIGNUP_START = 'SIGNUP_START'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILED = 'SIGNUP_FAILED'

export function getWord() {
    return (dispatch) => {
      dispatch({ type: GET_WORD_START })

      const headers = {
        Authorization: localStorage.getItem('token'),
      }
  
      axios.get("https://bw-conjugator.herokuapp.com/api/words", { headers })
        .then((res) => {
          dispatch({ type: GET_WORD_SUCCESS, payload: res.data })
        })
        .catch((err) => {
          dispatch({ type: GET_WORD_FAILED, payload: err.response.data })
        })
    }
  }

export function unload() {
  return {
		type: RELOAD,		
	}
}  

export function login(username, password) {
  return (dispatch) => {
    dispatch({ type: LOGIN_START })

    return axios.post('https://bw-conjugator.herokuapp.com/api/login', { username, password })
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        dispatch({ type: LOGIN_SUCCESS })
      })
      .catch((err) => {
        const payload = err.response ? err.response.data : err
        dispatch({ type: LOGIN_FAILED, payload })
      })
  }
}

export function signUp(username, password) {
  return (dispatch) => {
    dispatch({ type: SIGNUP_START })

    return axios.post('https://bw-conjugator.herokuapp.com/api/register', { username, password })
      .then((res) => {
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        const payload = err.response ? err.response.data : err
        dispatch({ type: SIGNUP_FAILED, payload })
      })
  }
}