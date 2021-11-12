// region import
import React, { lazy, Suspense } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import {
  ProvideContextCoin,
  ProvideContextView,
  ProvideContextModal,
} from '@/components'

// utilities
import { resources } from '@/utilities'

// // styles
import '@/css/fonts/Aileron/index.css'
import '@/css/index.css'

// views
const Home = lazy(() => import('@/views/Home'))
const Signup = lazy(() => import('@/views/Signup'))
const Dashboard = lazy(() => import('@/views/Dashboard'))
const Coin = lazy(() => import('@/views/Coin'))
const Setting = lazy(() => import('@/views/Setting'))
// endregion

const App = (
  <ProvideContextModal>
    <ProvideContextView>
      <ProvideContextCoin>
        <Router>
          <Suspense fallback={null}>
            <Switch>
              <Route exact path={resources.path.home} component={Home} />
              <Route exact path={resources.path.signup} component={Signup} />
              <Route exact path={resources.path.dashboard} component={Dashboard} />
              <Route exact path={resources.path.coinSpecific} component={Coin} />
              <Route exact path={resources.path.settingSpecific} component={Setting} />
            </Switch>
          </Suspense>
        </Router>
      </ProvideContextCoin>
    </ProvideContextView>
  </ProvideContextModal>
)

// eslint-disable-next-line no-undef
const element = document.getElementById('app')

render(App, element)
