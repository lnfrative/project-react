// region import
import React from 'react'

// hooks
import { useStage } from 'hooks'

// components
import { DialogNotificationConfirmTransaction, DialogNotification, SVGIconSuccess, Button, Middleware } from 'components'

// utilities
import { message, resources } from 'utilities'

// modules
import { initialState, handleVerificationSuccess, toHome } from './module'
// endregion

function ConfirmTransaction() {
	const stage = useStage(initialState)
	return (
		<Middleware requirements={resources.routes.confirmTransaction.middlewares}>
			<DialogNotification
				open={stage.state.status === 'verified'}
				Icon={<SVGIconSuccess />}
				title={message({ id: 'SUCCESS_CONFIRMATION' })}
				message={message({ id: 'SUCCESS_CONFIRMATION_TX' })}
				ContentAfterMessage={
					<Button
						buttonHTMLAttributes={{
							type: 'button',
							onClick: toHome,
						}}
						design="normal"
						title="Confirm"
					/>
				}
			/>
			<DialogNotificationConfirmTransaction
				onSuccess={handleVerificationSuccess(stage)}
				open={stage.state.status === 'unverified'}
			/>
		</Middleware>
	) 
	
}

export default ConfirmTransaction
