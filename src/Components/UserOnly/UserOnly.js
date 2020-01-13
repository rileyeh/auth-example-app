// the idea is to add a redirect from this page back to main, so that if people logout, they are redirected back to main.

import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './User.scss'
const source = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/golden-retriever-puppy-portrait-doug-mclaughlin.jpg'

function UserOnly(props) {
    if (!props.user) {
        return <Redirect to='/'/>
      }

    return (
        <div className='user-only'>
            <div className='text'>
                <p>Congrats on signing up for an account. Now you get to look at this puppy.</p>
            </div>
            <img src={source} alt='puppypic'/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps)(UserOnly)