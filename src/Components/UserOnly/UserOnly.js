// the idea is to add a redirect from this page back to main, so that if people logout, they are redirected back to main.

import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

function UserOnly(props) {
    if (!props.user) {
        return <Redirect to='/' />
      }

    return (
        <div>
            users only
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps)(UserOnly)