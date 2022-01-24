// region import
import React, { PropsWithChildren, useContext } from 'react'

// contexts
import { Modal as ContextModal } from 'contexts'

// interfaces
import { ModalBoxProps } from 'interfaces'

// components
import { Modal, SVGIconEquis, ButtonIcon } from 'components'

// modules
import { onClose } from './module'

// styles
import styles from './index.module.css'
// endregion

function ModalBox(props: PropsWithChildren<ModalBoxProps>) {
	const modal = useContext(ContextModal)
	return (
		<Modal>
			<div className={styles.container}>
				<div className={styles.header}>
					<span className={styles.title}>{props.title}</span>
					<ButtonIcon onClick={onClose(modal)}>
						<SVGIconEquis />
					</ButtonIcon>
				</div>
				<div>{props.children}</div>
			</div>
		</Modal>
	)
}

export default ModalBox
