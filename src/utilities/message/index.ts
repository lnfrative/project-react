import { MessageArgs } from 'interfaces'
import { messages } from 'utilities'

function translate(id: string, language = 'en') {
	return messages[id]?.[language]
}

function message(args: MessageArgs): string {
	return translate(args.id, args.language)
}

export default message
