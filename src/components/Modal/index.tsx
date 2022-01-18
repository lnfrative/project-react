// region import
import React, { PropsWithChildren, useEffect } from 'react'
import { createPortal } from 'react-dom'

// styles
import styles from './index.module.css'
// endregion

function Modal(props: PropsWithChildren<{}>) {
	const element = document.getElementById('modal')

	useEffect(() => {
		document.documentElement.style.overflow = 'hidden'
		return () => {
			document.documentElement.style.overflow = ''
		}
	}, [])

	if (!element) return null
	return createPortal(<div className={styles.container}>{props.children}</div>, element)
}

export default Modal
