export function statusMessage(msn: (arg: { id: string }) => string, code: number) {
  switch (code) {
    case 0:
      return msn({ id: 'TX_CREATED' })
    case 1:
      return msn({ id: 'TX_WAIT_USER_VERIFICATION' })
    case 2:
      return msn({ id: 'TX_SUCCESSFULLY_VALIDATED' })
    case 3:
      return msn({ id: 'TX_WAITING_POOL_APPROVAL' })
    case 4:
      return msn({ id: 'TX_WAITING_PROCESSED' })
    case 5:
      return msn({ id: 'TX_SUCCESSFULLY_PROCESSED' })
    case 110:
      return msn({ id: 'TX_CANCELED_BY_EMAIL_EXPIRED' })
    case 111:
      return msn({ id: 'TX_CANCELED_BY_2FA' })
    case 112:
      return msn({ id: 'TX_CANCELED_BY_BALANCES' })
    case 113:
      return msn({ id: 'TX_CANCELED_BY_UNKNOWN_REASONS' })
    default:
      return '';
  }
}