interface DialogNotification2FAProps {
	onCode: (code: string) => void,
	open: boolean
	onClose?: () => void,
}

export default DialogNotification2FAProps
