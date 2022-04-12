// region import
import React from 'react'

// hooks
import { useStage } from 'hooks'

// components
import { DialogNotificationConfirmTransaction } from 'components'

// modules
import { initialState } from './module'
// endregion

function ConfirmTransaction() {
	const stage = useStage(initialState)
	return <DialogNotificationConfirmTransaction open={stage.state.status === 'unverified'} />
}

export default ConfirmTransaction
