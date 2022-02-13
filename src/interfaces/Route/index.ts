import { UserRequirement } from 'types'

interface Route {
	base: string
	middlewares: Array<UserRequirement>
	route: {
		path: string
		params: Record<string, any>
	}
	aliases: Record<string, { path: string; alias: Record<string, any> }>
}

export default Route
