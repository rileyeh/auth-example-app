import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../Redux/reducers/user'
import './Header.scss'

function Header(props) {
    return (
        <header className='main-header'>
            <nav className='main-nav'>
                <ul className='nav-links'>
                    <li><Link to='/' className='link'>home</Link></li>
                    {
                    !props.user 
                    ? 
                    <li><Link to='/auth' className='link'>login/register</Link></li> 
                    :
                    <li onClick={props.logout} className='link'>logout</li>
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