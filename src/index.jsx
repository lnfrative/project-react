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
const ConfirmEmail = lazy(() => import('views/ConfirmEmail'))
const Recover = lazy(() => import('views/Recover'))
const ResetPassword = lazy(() => import('views/ResetPassword'))
// endregion

const { home, register, coin, setting, confirmEmail, recover, resetPassword } = resources.routes

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
											<Route exact path={home.base} component={Home} />
											<Route exact path={register.base} component={Signup} />
											<Route exact path={coin.route.path} component={Coin} />
											<Route exact path={setting.route.path} component={Setting} />
											<Route exact path={confirmEmail.route.path} component={ConfirmEmail} />
											<Route exact path={recover.route.path} component={Recover} />
											<Route exact path={resetPassword.route.path} component={ResetPassword} />
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
