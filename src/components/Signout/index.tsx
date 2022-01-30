// region import
import React, { PropsWithChildren, useContext } from 'react'

// contexts
import { Backend } from 'contexts'

// modules
import { signout } from './module'
// endregion

// TODO: Find out why backend is not updating on this component.
function Signout(props: PropsWithChildren<{}>) {
	const backend = useContext(Backend)
	return (
		<div role="button" tabIndex={0} onClick={signout(backend)}>
			{props.children}
		</div>
	)
}

export default Signout
