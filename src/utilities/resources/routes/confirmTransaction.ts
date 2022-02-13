import { Route } from 'interfaces'

const confirmTransaction: Route = {
	base: '/confirm-transaction',
	middlewares: ['auth'],
	route: {
		path: '/confirm-transaction',
		params: {},
	},
	aliases: {},
}

export default confirmTransaction
