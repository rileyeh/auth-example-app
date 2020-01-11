import React, {Component} from 'react'
import {connect} from 'react-redux'
import {register} from '../Redux/reducers/user'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit = e => {
        e.preventDefault()
        const {name, email, password} = this.state
            this.props.register({name, email, password})
            this.props.history.push('/')
    }

    render() {
        const {name, email, password} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type='text' value={name} name='name' onChange={this.handleChange}/>
                    </label>
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

export default connect(null, {register})(Register)