import 'babel-polyfill'
import 'core-js'
import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from 'store/configureStore'
import Root from 'components/Root'
import Post from 'components/Post'

const store = configureStore()

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Root}/>
            <Route path="/post" component={Post}/>
            <Route component={Root}/>
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
