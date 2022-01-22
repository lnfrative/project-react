// region import
import React from 'react'
import { Link } from 'react-router-dom'

// utilities
import { resources, message } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

function ForgotPassword() {
	return (
		<Link to={resources.routes.recover.route.path} className={styles.forgotPassword}>
			{message({ id: 'FORGOT_PASSWORD' })}
		</Link>
	)
}

export default ForgotPassword
