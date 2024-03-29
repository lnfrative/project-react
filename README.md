This repository hosts the codebase for the web application cryptocurrency clients.

It consists of a Single Page Application powered by React.

Main technologies used:

- React 18
- Redux Toolkit
- MUI 5
- React Router 5
- TypeScript 4

It is recommended that the developers who work on this repository have notions about some.

## Setup local environment

The local environment must connect to the development environment API. Therefore, it is important to make these specifications in your local .env file:

`REACT_APP_API=`

### Local serve

Browsers only respond to the Set-Cookie header for responses that are within the scope of the application's domain. Local environments must therefore be served on a subdomain. This can be achieved by modifying the hosts file of the operating system. For this example, the domain will be used, so in the hosts file the following must be added:

`127.0.0.1 yada yada`

Then, the following lines must be added to the .env file:

`REACT_APP_PUBLIC_URL=`

`HOST=`

`PORT=80`

**Important**: This will require port 80 to be free.

The command to start the local server is `yarn start`.

### Proxy for diferent ports

If port 80 is occupied in your local environment, a proxy is needed to redirect the configured local subdomain to the `localhost:3000` domain.
This should be done with nginx or apache or any other http server. Otherwise port 80 must be released and follow the steps above.

Once the proxy is done, these lines must be omitted from the .env file:

`HOST=`

`PORT=80`

Then use `yarn start` to start the local server.

## Docs

- [Development guidelines](docs/dev_guidelines.md)
- [Source structure](docs/source_structure.md)
- [FAQ](docs/faq.md)
