import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker'

import App from './containers/app/App'
import configureStore from './configureStore'
import history from './history'

const initialState = {}
const store = configureStore(initialState, history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,

  document.getElementById('root') // eslint-disable-line no-undef
)

registerServiceWorker()
