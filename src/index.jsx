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
// endregion

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
                      <Route exact path={resources.routes.home.base} component={Home} />
                      <Route exact path={resources.routes.register.base} component={Signup} />
                      <Route exact path={resources.routes.coin.route.path} component={Coin} />
                      <Route exact path={resources.routes.setting.route.path} component={Setting} />
                      <Route exact path={resources.routes.email.route.path} component={Email} />
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
