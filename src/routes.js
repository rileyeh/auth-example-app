import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Main from './Components/Main/Main'
import Auth from './Components/Auth/Auth'
import UserOnly from './Components/UserOnly/UserOnly'

export default (
    <Switch>
        <Route path='/usersonly' component={UserOnly}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/' exact component={Main} />
    </Switch>
)