import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import './Auth.scss'

export default function Auth(props) {
    const [login, setLogin] = useState(true)

    return (
        <div>
            {login && 
            <div className='auth-main'>
                <Login {...props}/>
                <p>need to <span onClick={() => setLogin(false)}>register?</span></p>
            </div>}

            {!login && 
            <div className='auth-main'>
                <Register {...props}/>
                <p>already have an account? <span onClick={() => setLogin(true)}>login here</span></p>
            </div>}
        </div>
    )
}