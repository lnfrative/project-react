// region import
import React, { Fragment } from 'react'
import { Redirect, useRouteMatch } from 'react-router-dom'

// interfaces
import { PaginationObject } from 'interfaces'

// hooks
import { useSessionStore } from 'hooks'

// utilities
import { resources } from 'utilities'

// components
import {
	HeaderDashboard,
	GridForm,
	FormAuthLogin,
	GroupCoinValues,
	PaginationBar,
	SendAndReceive,
	Overview,
	Income,
	Transactions,
	Subscriptions,
} from 'components'

// styles
import { Content } from './style'
// endregion

const paginationObjects: Array<PaginationObject> = [
	{
		id: 'overview',
		title: 'Overview',
		main: true,
		content: <Overview />,
	},
	{ id: 'income', title: 'Income', content: <Income /> },
	{ id: 'send_and_receive', title: 'Send & Receive', content: <SendAndReceive /> },
	{ id: 'transactions', title: 'Transactions', content: <Transactions /> },
	{ id: 'subscriptions', title: 'Subscriptions', content: <Subscriptions /> },
]

function RedirectInvalidRouteParams() {
	const { params } = useRouteMatch()
	if (params.section === 'login') {
		return <Redirect to={resources.routes.login.route.path} />
	}
	return null
}

function Dashboard() {
	return (
		<HeaderDashboard>
			<Content>
				<GroupCoinValues />
			</Content>
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
	const session = useSessionStore()
	return (
		<>
			<RedirectInvalidRouteParams />
			{session.user.status !== 'loaded' && (
				<Login />
			)}
			{session.user.status === 'loaded' && (
				<Dashboard />
			)}
		</>
	)
}

export default Home
