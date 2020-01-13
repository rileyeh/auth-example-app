require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const AuthCtrl = require('./controllers/authCtrl')

const app = express()

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected')
}).catch(err => console.log('cannot connect to database', err))

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET, 
    resave: false, 
    saveUninitialized: false, 
    cookie: {
        maxAge: 1000 * 60 * 60 * 24* 365
    }
}))

// auth
app.post('/auth/register', AuthCtrl.register)
app.post('/auth/login', AuthCtrl.login)
app.delete('/auth/logout', AuthCtrl.logout)

app.listen(SERVER_PORT, () => console.log(`running on port ${SERVER_PORT}`))
