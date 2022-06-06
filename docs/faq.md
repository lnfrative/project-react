# FAQ

## How to make backend API calls?

Backend API calls are made through the [fetcher](https://github.com/DogeCash-Labs/dogec-account-web/blob/dev-main/src/utilities/fetcher/index.ts#L29) function.
Functions derived from fetcher (example fetchUsers) must be specified in the same file to accomplish specific tasks. You should find out if there is already a function that meets your needs by referring to the above file to avoid redundancy.

Important: All asynchronous resources should be handled by a store instead of through a component to avoid memory leak problems. A component can call a function that requests an asynchronous resource, from an API for example, but a component must never receive it directly.

Asynchronous resources are requested through a Store.

## How and when to use a store?

Stores are used when the information may be required by more entities or in different places. This is mostly the case for asynchronous resources. For example, the authenticated user is a resource whose information will be used by the application in various places. That is why, in order to avoid requesting this resource from an API every time it is requested, it must be saved in a place from which it is publicly accessible regardless of the initial place from which it was requested.

This is done through Redux stores.

The stores are used through their respective [hook](https://github.com/DogeCash-Labs/dogec-account-web/blob/dev-main/src/hooks/index.js) that allows to use a specific store directly from a component. They can be easily recognized by the name `useStore{Name}`.

Asynchronous resources stored in a Store comply and must always comply with the respective [interface for asynchronous resources](https://github.com/DogeCash-Labs/dogec-account-web/blob/dev-main/src/interfaces/AsyncResource/index.ts).

## When do I have to use or create an interface?

The interfaces must be created in their respective directory following the model used in it whenever the same object is required in two or more different and independent files.