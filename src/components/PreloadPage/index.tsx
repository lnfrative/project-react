// region import
import React from 'react'
import { CircularProgress } from '@mui/material'

// utilities
import { externalResources, message } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

function PreloadPage() {

	return (
		<div className={styles.container}>
			<img
				alt={externalResources.dogeCashLogoIcon.alt}
				src={externalResources.dogeCashLogoIcon.src}
				width={externalResources.dogeCashLogoIcon.width}
				height={externalResources.dogeCashLogoIcon.height}
			/>
			<div className={styles.info}>
				<CircularProgress color="inherit" size="1rem" />
				<span className={styles.message}>{message({ id: 'LOADING_SESSION' })}</span>
			</div>
		</div>
	)
}

export default PreloadPage
