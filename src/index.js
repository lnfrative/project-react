// region import
import React, { lazy, Suspense } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// utilities
import { resources } from '@/utilities'

// // styles
import '@/css/fonts/Aileron/index.css'
import '@/css/fonts/Montserrat/index.css'
import '@/css/index.css'

// views
const Home = lazy(() => import('@/views/Home'))
const Signup = lazy(() => import('@/views/Signup'))
const Dashboard = lazy(() => import('@/views/Dashboard'))
// endregion

const App = (
  <Router>
    <Suspense fallback={null}>
      <Switch>
        <Route exact path={resources.path.home} component={Home} />
        <Route exact path={resources.path.signup} component={Signup} />
        <Route exact path={resources.path.dashboard} component={Dashboard} />
      </Switch>
    </Suspense>
  </Router>
)

// eslint-disable-next-line no-undef
const element = document.getElementById('app')

render(App, element)
