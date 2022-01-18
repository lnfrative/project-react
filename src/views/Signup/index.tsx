// region import
import React from 'react'

// components
import { GridForm, FormAuthRegister, Middleware } from 'components'

// utilities
import { resources } from 'utilities'
// endregion

function Signup() {
	return (
		<Middleware requirements={resources.routes.register.middlewares}>
			<GridForm>
				<FormAuthRegister />
			</GridForm>
		</Middleware>
	)
}

export default Signup
