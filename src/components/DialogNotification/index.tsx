// region import
import React from 'react'
import { Dialog, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'

// interfaces
import { DialogNotificationProps } from 'interfaces'

// components
import { SVGIconSuccess } from 'components'

// styles
import styles from './index.module.css'
// endregion

const Transition = React.forwardRef(
	(
		props: TransitionProps & {
			children: React.ReactElement<any, any>
		},
		ref: React.Ref<unknown>
	) => <Slide direction="up" ref={ref} {...props} />
)

function DialogNotification(props: DialogNotificationProps) {
	return (
		<Dialog TransitionComponent={Transition} open={props.open} onClose={props.onClose}>
			<div className={styles.container}>
				<SVGIconSuccess />
				<div className={styles.title}>{props.title}</div>
				<div className={styles.containerMessage}>
					<span>{props.message}</span>
				</div>
			</div>
		</Dialog>
	)
}

export default DialogNotification
