import React from 'react'
import { Home } from './components/Home'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './components/store/store'

export const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Provider>
  </BrowserRouter>
)
