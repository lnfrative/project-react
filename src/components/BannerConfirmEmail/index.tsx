// region import
import React from 'react'

// hooks
import { useSessionStore, useApiStore } from 'hooks'

// components
import { Banner, Button, BackdropLoader } from 'components'

// utilities
import { message } from 'utilities'

// styles
import { Container, ConfirmEmail } from './style'

// modules
import { resend } from './module'
// endregion

function BannerConfirmEmail() {
	const session = useSessionStore()
	const api = useApiStore()

	if (!session.user) return null

	return (
		<Banner>
			<Container>
				<ConfirmEmail>
					A verification email has been sent to <b>{session.user.email}</b>.
				</ConfirmEmail>
				<Button
					buttonHTMLAttributes={{
						type: 'button',
						onClick: resend,
					}}
					design="minimal"
					title="Resend email"
				/>
				<BackdropLoader message={message({ id: 'RESENDING_EMAIL' })} open={api.resendEmailConfirmation.status === 'loading'} />
			</Container>
		</Banner>
	)
}

export default BannerConfirmEmail
