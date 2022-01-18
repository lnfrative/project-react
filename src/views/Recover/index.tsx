// region import
import React from 'react'

// utiltiies
import { resources } from 'utilities'

// components
import { Middleware, GridForm, FormAuthRecoverPassword } from 'components'
// endregion

function Recover() {
	return (
		<Middleware requirements={resources.routes.recover.middlewares}>
			<GridForm>
				<FormAuthRecoverPassword />
			</GridForm>
		</Middleware>
	)
}

export default Recover
