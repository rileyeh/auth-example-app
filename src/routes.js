import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Main from './Components/Main'
import Auth from './Components/Auth'
import UserOnly from './Components/UserOnly'

export default (
    <Switch>
        <Route path='/usersonly' component={UserOnly}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/' exact component={Main} />
    </Switch>
)