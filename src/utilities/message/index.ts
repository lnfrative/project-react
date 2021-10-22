import { MessageArgs } from '@/utilities/interfaces'
import { messages } from '@/utilities'

function translate(id, language = 'en') {
  return messages[id]?.[language]
}

function message(args: MessageArgs): string {
  return translate(args.id, args.language)
}

export default message
