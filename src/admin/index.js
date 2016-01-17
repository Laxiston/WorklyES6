import React from 'react'
import {render} from 'react-dom'
import {browserHistory, Router, Route, IndexRoute} from 'react-router'
import Index from './pages/index'
import Dictionary from './pages/dictionary'
import User from './pages/user'
import Question from './pages/question'
import App from './pages/app'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const router = (
  <Router history={browserHistory}>
    <Route path='/admin' component={App}>
      <IndexRoute component={Index} />
      <Route path='dictionary' component={Dictionary} />
      <Route path='user' component={User} />
      <Route path='question' component={Question} />
    </Route>
  </Router>
)

render(router, document.body)
