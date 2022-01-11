import { ContextBackend } from 'interfaces'
import { resources } from 'utilities'

function onSubmit(backend: ContextBackend) {
  return (args: { email: any, password: any }) => {
    const email = args.email.value
    const password = args.password.value
    backend.request.post({
      endpoint: resources.endpoints.post.userCreateAccessToken,
      params: { email, password },
      updateCache: true,
    })
  }
}

export {
  onSubmit,
}
