// region import
import React from 'react'
import { Backdrop, CircularProgress } from '@mui/material'

// interfaces
import { BackdropLoaderProps } from 'interfaces'

// styles
import styles from './index.module.css'
// endregion

function BackdropLoader(props: BackdropLoaderProps) {
	return (
		<Backdrop open={props.open} sx={{ zIndex: 10000 }}>
			<div className={styles.loader}>
				<CircularProgress color="info" />
				{props.message && <div className={styles.loaderMessage}>{props.message}</div>}
			</div>
		</Backdrop>
	)
}

export default BackdropLoader
