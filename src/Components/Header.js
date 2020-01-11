import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../Redux/reducers/user'

class Header extends Component {
    constructor(props) {
        super(props)

        // this.state= {
        //     user: this.props
        // }
    };

    render() {
        console.log(this.props)
        return (
            <header className='main-header'>
                <nav className='main-nav'>
                    <ul className='nav-links'>
                        <li><Link to='/'>home</Link></li>
                        {
                        !this.props.user 
                        ? 
                        <li><Link to='/auth'>login/register</Link></li> 
                        :
                        <li onClick={this.props.logout}>logout</li>
                        }
                    </ul>
                </nav>
            </header>
        )
    };
};

const mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps, {logout})(Header)