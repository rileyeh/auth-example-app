import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function Auth(props) {
    const [login, setLogin] = useState(true)

    return (
        <div>
            {login && 
            <div>
                <Login {...props}/>
                <p>need to <span onClick={() => setLogin(false)}>register?</span></p>
            </div>}

            {!login && 
            <div>
                <Register {...props}/>
                <p>already have an account? <span onClick={() => setLogin(true)}>login here</span></p>
            </div>}
        </div>
    )
}