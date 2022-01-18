interface BackendUser {
	created_at: string
	email: string
	email_verified_at: string | null
	id: number
	name: string
	pool_id: number
	two_factor_verified: string | null
	updated_at: string
}

export default BackendUser
