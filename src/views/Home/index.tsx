// region import
import React, { useContext, useEffect } from 'react'

// interfaces
import { PaginationObject } from 'interfaces'

// contexts
import { Backend } from 'contexts'

// utilities
import { resources } from 'utilities'

// components
import {
	HeaderDashboard,
	GridForm,
	FormAuthLogin,
	PreloadPage,
	GroupCoinValues,
	PaginationBar,
	Overview,
} from 'components'

// styles
import styles from './index.module.css'
// endregion

const paginationObjects: Array<PaginationObject> = [
	{
		id: 'overview',
		title: 'Overview',
		main: true,
		content: <Overview />,
	},
	{ id: 'income', title: 'Income', content: <div>Giftcar</div> },
	{ id: 'send_and_receive', title: 'Send & Receive', content: <div>Movement</div> },
	{ id: 'subscriptions', title: 'Subscriptions', content: <div>About</div> },
]

function Dashboard() {
	const backend = useContext(Backend)
	const wallets = backend.response({ endpoint: resources.endpoints.get.wallets, method: 'get' })
	const balances = backend.response({
		endpoint: resources.endpoints.get.userBalance,
		method: 'get',
	})

	useEffect(() => {
		backend.request({
			endpoint: resources.endpoints.get.wallets,
			label: 'LOADING_WALLLETS',
			method: 'get',
		})
		backend.request({
			endpoint: resources.endpoints.get.userBalance,
			method: 'get',
			label: 'GETTING_BALANCES',
		})
	}, [])

	if (!wallets?.success || !balances?.success) return <PreloadPage />
	return (
		<HeaderDashboard>
			<div className={styles.balance}>
				<GroupCoinValues />
			</div>
			<PaginationBar
				pathnameBase={resources.routes.home.base}
				pathParamId={resources.routes.home.base}
				paginationObjects={paginationObjects}
			/>
		</HeaderDashboard>
	)
}

const Login = () => (
	<GridForm>
		<FormAuthLogin />
	</GridForm>
)

function Home() {
	const { response } = useContext(Backend)
	const user = response({ endpoint: resources.endpoints.get.user, method: 'get' })
	if (!user?.success) return <Login />
	return <Dashboard />
}

export default Home
