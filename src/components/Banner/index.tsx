// region import
import React, { PropsWithChildren } from 'react'

// styles
import styles from './index.module.css'
// endregion

function Banner(props: PropsWithChildren<{}>) {
	return <div className={styles.container}>{props.children}</div>
}

export default Banner
