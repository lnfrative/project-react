import { Route } from 'interfaces'

const coin: Route = {
	base: '/coin',
	middlewares: ['auth'],
	route: {
		path: '/coin/:name?/:detail?',
		params: {
			name: 'name',
			detail: 'detail',
		},
	},
	aliases: {
		name: {
			path: '/coin/{name}',
			alias: {
				name: '{name}',
			},
		},
		detail: {
			path: '/coin/{name}/{detail}',
			alias: {
				name: '{name}',
				detail: '{detail}',
			},
		},
	},
}

export default coin
