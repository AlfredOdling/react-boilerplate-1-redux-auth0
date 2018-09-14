import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import '../../styles/css/app.css'

import Login from '../Login'
import Auth from '../../auth/auth' // eslint-disable-line
import Startpage from '../startPage/Startpage'

const auth = new Auth()

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/login" render={props => <Login auth={auth} {...props} />} />
          <Route path="/user" render={props => <Startpage auth={auth} {...props} />} />

          <Route
            path=""
            render={props =>
              auth.isAuthenticated() ? (
                <Redirect to="/user" />
              ) : (
                <Startpage auth={auth} {...props} />
              )
            }
          />
        </Switch>
      </div>
    )
  }
}

export default App
