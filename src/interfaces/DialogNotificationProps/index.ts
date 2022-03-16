interface DialogNotificationProps {
	open: boolean
	title: string
	message: string
	onClose?: () => void
	Icon?: any,
	Content?: any,
	ContentAfterMessage?: any
}

export default DialogNotificationProps
