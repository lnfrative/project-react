import { MessageArgs } from 'utilities/Interfaces'
import { messages } from 'utilities'

function translate(id: string, language = 'en') {
  const message = messages[id]
  return message?.[language]
}

function message(args: MessageArgs): string {
  return translate(args.id, args.language)
}

export default message
