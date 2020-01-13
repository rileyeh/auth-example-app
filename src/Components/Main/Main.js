import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

function Main(props) {
    return (
        <div>
            <h1>main</h1>
            {props.user && <Link to='/usersonly'>user area</Link>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps)(Main)