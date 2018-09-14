import React, { Component } from 'react'
import history from '../history'

class Login extends Component {
  componentDidMount() {
    const isLogged = localStorage.getItem('access_token') // eslint-disable-line no-undef
    const { auth } = this.props

    if (!isLogged) {
      auth.login()
    } else {
      history.replace('/user')
    }
  }

  render() {
    return <div />
  }
}

export default Login
