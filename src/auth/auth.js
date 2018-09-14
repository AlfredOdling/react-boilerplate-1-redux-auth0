import Auth0Lock from 'auth0-lock'
import history from '../history'

export default class Auth {

  lock = new Auth0Lock('yourID', 'yourApp.eu.auth0.com', {
    autoclose: false,
    languageDictionary: {
      title: "Template"
    },
    auth: {
      redirectUrl: 'http://localhost:3000/login',
      responseType: 'token id_token',
      params: {
        scope: 'openid email user_metadata'
      }
    },
    mustAcceptTerms: false
  })


  constructor() {
    this.handleAuthentication()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  login() {
    this.lock.show()
  }

  handleAuthentication() {
    // Add a callback for Lock's `authenticated` event
    this.lock.on('authenticated', (data) => {

      this.lock.hide()

      console.log(data)
      this.setSession(data)
    })
    // Add a callback for Lock's `authorization_error` event
    this.lock.on('authorization_error', (err) => {
      console.log(err)
      alert(`Error: ${err.error}. Check the console for further details.`)

      history.replace('/login')
    })
  }

  setSession = (authResult) => {
    if (authResult && authResult.accessToken) {
      this.lock.hide()

      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
      localStorage.setItem('access_token', authResult.accessToken)
      localStorage.setItem('id_token', authResult.idToken)

      localStorage.setItem('expires_at', expiresAt)
      // navigate to the home route
      history.replace('/user')
    }
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    // navigate to the home route
    history.replace('/login')
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    if (new Date().getTime() < expiresAt) {
      return true
    } else {
      this.logout()
      return false
    }
  }
}
