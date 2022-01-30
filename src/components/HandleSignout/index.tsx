// region import
import React, { PropsWithChildren, useContext, useEffect } from 'react'

// contexts
import { Backend } from 'contexts'

// components
import { BackdropLoader } from 'components'

// utilities
import { requestId, resources } from 'utilities'
// endregion

const endsignout = resources.endpoints.post.signout
const enduser = resources.endpoints.get.user

function HandleSignout(props: PropsWithChildren<{}>) {
	const backend = useContext(Backend)

	const loading = backend.loading?.id === requestId('post', endsignout)

	const signout = backend.response({
		method: 'post',
		endpoint: endsignout,
	})

	useEffect(() => {
		if (signout?.success) {
			backend.request({
				method: 'get',
				endpoint: enduser,
				updateCache: true,
			})
		}
	}, [signout?.success])

	return (
		<>
			<BackdropLoader open={loading} />
			{props.children}
		</>
	)
}

export default HandleSignout
