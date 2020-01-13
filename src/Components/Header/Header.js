import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../Redux/reducers/user'
import './Header.css'

function Header(props) {
    return (
        <header className='main-header'>
            <nav className='main-nav'>
                <ul className='nav-links'>
                    <li><Link to='/'>home</Link></li>
                    {
                    !props.user 
                    ? 
                    <li><Link to='/auth'>login/register</Link></li> 
                    :
                    <li onClick={props.logout}>logout</li>
                    }
                </ul>
            </nav>
        </header>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps, {logout})(Header)