import axios from 'axios'

const CURRENT_USER = 'CURRENT_USER'
const REGISTER_USER = 'REGISTER_USER'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

const initialState = {
    data: null,
    loading: false
}

export default function(state = initialState, action) {
    let { type, payload } = action

    switch(type) {
        case CURRENT_USER + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case CURRENT_USER + '_FULFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case CURRENT_USER + '_REJECTED':
            return {
                ...state, 
                loading: false
            }

        case REGISTER_USER + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case REGISTER_USER + '_FULFILLED':
            console.log(payload)
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case REGISTER_USER + '_REJECTED':
            return {
                ...state, 
                loading: false
            }


        case LOGIN_USER + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case LOGIN_USER + '_FULFILLED':
            return {
                ...state,
                data: payload.data,
                loading: false
            }
        case LOGIN_USER + '_REJECTED':
            return {
                ...state, 
                loading: false
            }



        case LOGOUT_USER + '_PENDING':
            return {
                ...state, 
                loading: true
            }
        case LOGOUT_USER + '_FULFILLED':
            return {
                ...state,
                data: null,
                loading: false
            }
        case LOGOUT_USER + '_REJECTED':
            return {
                ...state, 
                loading: false
            }

        default:
            return state
    }
}

export function currentUser() {
    return {
        type: CURRENT_USER,
        payload: axios.get('/auth/currentUser')
    }
}

export function register(loginInfo) {
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/register', loginInfo)
    }
}

export function login(loginInfo) {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', loginInfo)
    }
}

export function logout() {
    return {
        type: LOGOUT_USER,
        payload: axios.delete('/auth/logout')
    }
}