import { Error } from 'interfaces'

const passwordNotMatch: Error = {
  sign: '!',
  data: {
    message: 'PASSWORD_NOT_MATCH',
  },
}

export default passwordNotMatch
