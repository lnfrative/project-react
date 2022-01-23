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
} from 'components'

// styles
import styles from './index.module.css'
// endregion

const paginationObjects: Array<PaginationObject> = [
	{
		id: 'overview',
		title: 'Overview',
		main: true,
		content: <div>content</div>,
	},
	{ id: 'income', title: 'Income', content: <div>Giftcard</div> },
	{ id: 'send_and_receive', title: 'Send & Receive', content: <div>Movement</div> },
	{ id: 'subscriptions', title: 'Subscriptions', content: <div>About</div> },
]

function Dashboard() {
	const { request, response } = useContext(Backend)
	const wallets = response.get({ endpoint: resources.endpoints.get.wallets })

	useEffect(() => {
		request.get({ endpoint: resources.endpoints.get.wallets, label: 'LOADING_WALLLETS' })
	}, [])

	if (!wallets?.success) return <PreloadPage />
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
	const user = response.get({ endpoint: resources.endpoints.get.user })
	if (!user?.success) return <Login />
	return <Dashboard />
}

export default Home
