// region import
import React, { useContext } from 'react'
import { CircularProgress } from '@mui/material'

// utilities
import { externalResources, message } from 'utilities'

// contexts
import { Backend } from 'contexts'

// styles
import styles from './index.module.css'
// endregion

function PreloadPage() {
	const { loading } = useContext(Backend)

	return (
		<div className={styles.container}>
			<img
				alt={externalResources.dogeCashLogoIcon.alt}
				src={externalResources.dogeCashLogoIcon.src}
				width={externalResources.dogeCashLogoIcon.width}
				height={externalResources.dogeCashLogoIcon.height}
			/>
			<div className={styles.info}>
				{!!loading?.label && (
					<>
						<CircularProgress color="inherit" size="1rem" />
						<span className={styles.message}>{message({ id: loading.label })}</span>
					</>
				)}
			</div>
		</div>
	)
}

export default PreloadPage
