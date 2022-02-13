// region import
import React, { useContext } from 'react'

// interfaces
import { BackendUser } from 'interfaces'

// contexts
import { Backend } from 'contexts'

// components
import { Banner, Button, BackdropLoader } from 'components'

// utilities
import { requestId, resources, message } from 'utilities'

// styles
import styles from './index.module.css'

// modules
import { resend } from './module'
// endregion

const enduser = resources.endpoints.get.user
const endresendemail = resources.endpoints.get.resendEmailConfirmation

function BannerConfirmEmail() {
	const backend = useContext(Backend)
	const user: BackendUser = backend.response({ endpoint: enduser, method: 'get' })?.data

	const loading = backend.loading?.id === requestId('get', endresendemail)

	return (
		<Banner>
			<div className={styles.confirmEmail}>
				A verification email has been sent to <b>{user.email}</b>.
			</div>
			<Button
				buttonHTMLAttributes={{
					type: 'button',
					onClick: resend(backend),
				}}
				design="minimal"
				title="Resend email"
			/>
			<BackdropLoader message={message({ id: 'RESENDING_EMAIL' })} open={loading} />
		</Banner>
	)
}

export default BannerConfirmEmail
