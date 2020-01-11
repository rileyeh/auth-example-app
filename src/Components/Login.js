import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login} from '../Redux/reducers/user'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit = e => {
        e.preventDefault()
        const {email, password} = this.state
            this.props.login({email, password})
            this.props.history.push('/')
    }

    render() {
        const {email, password} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type='text' value={email} name='email' onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <input type='text' value={password} name='password' onChange={this.handleChange}/>
                    </label>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {login})(Login)