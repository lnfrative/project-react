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
	SendAndReceive,
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
	{ id: 'send_and_receive', title: 'Send & Receive', content: <SendAndReceive /> },
	{ id: 'transactions', title: 'Transactions', disabled: true, content: null },
	{ id: 'subscriptions', title: 'Subscriptions', disabled: true, content: null },
	{ id: 'income', title: 'Income', disabled: true, content: null },
]

function Dashboard() {
	const backend = useContext(Backend)
	const balances = backend.response({
		endpoint: resources.endpoints.get.userBalance,
		method: 'get',
	})

	useEffect(() => {
		backend.request({
			endpoint: resources.endpoints.get.userBalance,
			method: 'get',
			label: 'GETTING_BALANCES',
		})
	}, [])

	if (!balances?.success) return <PreloadPage />
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
