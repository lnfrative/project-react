// region import
import React from 'react'

// components
import { Middleware, FormAuthResetPassword, GridForm } from 'components'

// utilities
import { resources } from 'utilities'
// endregion

function ResetPassword() {
	return (
		<Middleware requirements={resources.routes.resetPassword.middlewares}>
			<GridForm>
				<FormAuthResetPassword />
			</GridForm>
		</Middleware>
	)
}

export default ResetPassword
