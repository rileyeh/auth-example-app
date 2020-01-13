import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import './Main.scss'

function Main(props) {
    return (
        <div>
            {props.user ? 
            <div className='main'>
                <Link to='/usersonly' className='link'>well, looky there, it's the super secret link. click it if you dare.</Link>
            </div>
            :
            <div className='main'>
                <h2>you have to log in to see the super secret link.</h2>
            </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps)(Main)