// region import
import React from 'react'
import { Dialog, Fade } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'

// interfaces
import { DialogNotificationProps } from 'interfaces'

// components
import { SVGIconEquis } from 'components'

// styles
import { Container, Title, ContentAfterMessage, ContainerMessage, Content, Close } from './style'
// endregion

const Transition = React.forwardRef(
	(
		props: TransitionProps & {
			children: React.ReactElement<any, any>
		},
		ref: React.Ref<unknown>
	) => <Fade ref={ref} {...props} />
)

function DialogNotification(props: DialogNotificationProps) {
	return (
		<Dialog TransitionComponent={Transition} open={props.open} onClose={props.onClose}>
			<Container>
				<Close onClick={props.onClose}>
					<SVGIconEquis />
				</Close>
				{props.Icon}
				<Title style={{
					marginTop: props.Icon ? '' : '0'
				}}>{props.title}</Title>
				{!!props.Content && (
					<Content>
						{props.Content}
					</Content>
				)}
				<ContainerMessage>
					<span>{props.message}</span>
				</ContainerMessage>
				{!!props.ContentAfterMessage && (
					<ContentAfterMessage>
						{props.ContentAfterMessage}
					</ContentAfterMessage>
				)}
			</Container>
		</Dialog>
	)
}

export default DialogNotification
