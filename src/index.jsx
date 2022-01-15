// region import
import React, { lazy, Suspense } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import {
  ProvideContextCoin,
  ProvideContextView,
  ProvideContextModal,
  ProvideContextBackend,
  ProvideContextCurrency,
  ApplicationStart,
  HandleBackendErrors,
} from 'components'

// utilities
import { resources } from 'utilities'

// // styles
import 'css/fonts/Aileron/index.css'
import 'css/index.css'

// views
const Home = lazy(() => import('views/Home'))
const Signup = lazy(() => import('views/Signup'))
const Coin = lazy(() => import('views/Coin'))
const Setting = lazy(() => import('views/Setting'))
const Email = lazy(() => import('views/Email'))
const Recover = lazy(() => import('views/Recover'))
// endregion

const { routes } = resources

const App = (
  <ProvideContextBackend>
    <ProvideContextModal>
      <ProvideContextView>
        <ProvideContextCoin>
          <ProvideContextCurrency>
            <ApplicationStart>
              <HandleBackendErrors>
                <Router>
                  <Suspense fallback={null}>
                    <Switch>
                      <Route exact path={routes.home.base} component={Home} />
                      <Route exact path={routes.register.base} component={Signup} />
                      <Route exact path={routes.coin.route.path} component={Coin} />
                      <Route exact path={routes.setting.route.path} component={Setting} />
                      <Route exact path={routes.email.route.path} component={Email} />
                      <Route exact path={routes.recover.route.path} component={Recover} />
                      <Route exact path={routes.resetPassword.route.path} component={null} />
                    </Switch>
                  </Suspense>
                </Router>
              </HandleBackendErrors>
            </ApplicationStart>
          </ProvideContextCurrency>
        </ProvideContextCoin>
      </ProvideContextView>
    </ProvideContextModal>
  </ProvideContextBackend>
)

// eslint-disable-next-line no-undef
const element = document.getElementById('app')

render(App, element)
