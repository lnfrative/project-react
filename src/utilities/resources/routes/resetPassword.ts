import { Route } from 'interfaces'

const resetPassword: Route = {
	base: '/reset-password',
	middlewares: ['guess'],
	route: {
		path: '/reset-password',
		params: {},
	},
	aliases: {},
}

export default resetPassword
