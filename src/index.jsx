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
	ProvideContextCaptcha,
	ProvideContextCurrency,
	ApplicationStart,
	HandleBackendErrors,
	HandleSignout,
	ProvideTheme,
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
const ConfirmTransaction = lazy(() => import('views/ConfirmTransaction'))
// endregion

const { home, register, coin, setting, confirmEmail, recover, resetPassword, confirmTransaction } =
	resources.routes

const App = (
	<ProvideTheme>
		<ProvideContextBackend>
			<ProvideContextModal>
				<ProvideContextView>
					<ProvideContextCoin>
						<ProvideContextCurrency>
							<ProvideContextCaptcha>
								<ApplicationStart>
									<HandleBackendErrors>
										<HandleSignout>
											<Router>
												<Suspense fallback={null}>
													<Switch>
														<Route exact path={setting.route.path} component={Setting} />
														<Route exact path={register.base} component={Signup} />
														<Route exact path={coin.route.path} component={Coin} />
														<Route exact path={confirmEmail.route.path} component={ConfirmEmail} />
														<Route
															exact
															path={confirmTransaction.route.path}
															component={ConfirmTransaction}
														/>
														<Route exact path={recover.route.path} component={Recover} />
														<Route
															exact
															path={resetPassword.route.path}
															component={ResetPassword}
														/>
														<Route exact path={home.route.path} component={Home} />
													</Switch>
												</Suspense>
											</Router>
										</HandleSignout>
									</HandleBackendErrors>
								</ApplicationStart>
							</ProvideContextCaptcha>
						</ProvideContextCurrency>
					</ProvideContextCoin>
				</ProvideContextView>
			</ProvideContextModal>
		</ProvideContextBackend>
	</ProvideTheme>
)

// eslint-disable-next-line no-undef
const element = document.getElementById('app')

render(App, element)
