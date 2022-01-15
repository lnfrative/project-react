import { ContextBackend } from 'interfaces'
import { resources } from 'utilities'

const endrecoverpassword = resources.endpoints.post.recoverPassword

function onSubmit(backend: ContextBackend) {
  return (args: { email: any }) => {
    const email = args.email.value
    backend.request.post({
      endpoint: endrecoverpassword,
      params: { email },
      updateCache: true,
    })
  }
}

export {
  onSubmit,
}
