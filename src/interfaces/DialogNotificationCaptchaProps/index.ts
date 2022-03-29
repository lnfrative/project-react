import { CaptchaProps } from 'interfaces'

interface DialogNotificationCaptchaProps extends CaptchaProps {
  open: boolean
  onClose: () => void
}

export default DialogNotificationCaptchaProps
