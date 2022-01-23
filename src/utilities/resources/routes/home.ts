import { Route } from 'interfaces'

const home: Route = {
	base: '/',
	middlewares: [],
	route: {
		path: '/:section?',
		params: {
			section: 'section',
		},
	},
	aliases: {},
}

export default home
