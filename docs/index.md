## Source directories

These directories are meant to be treated as modules. This is very important. Any import of elements from these directories is done via `import { Element } from 'module'`, where `Element` is the object to be imported and `module` is the name of the directory.

Every element in these directories, except `css`, must end with an `export default {Element}` statement, where `Element` is the name of the created element, this can be a `component`, `context`, `interface`, `type` etc

Once an element is created, it should be listed in the `{directory}/index.js` file, where `directory` is the parent directory of the created element (`components`, `contexts`, `interfaces`, etc) of the form `import { default as {Element} } from './{Element}`, where `Element` name of the created component.

The existing directories are the following:

### components
components is the place where all the components of the application are located. It is a set of directories of the form `components/{Component}/index.tsx` where `Component` is the name of the component, always in Capitalize. That is, each component is a directory inside `components`. A component can never have subcomponents, so avoid things like `components/{Component}/components/`, if a component needs to be broken down into subcomponents, these subcomponents should be treated as standalone components and placed at the `components level `.

### contexts
contexts holds the contexts of the application. Contexts are data used to preserve information in the application independent of the component life cycle. In this way a state is preserved.

### interfaces
interfaces contains the models of the objects handled in the different parts of the application. Every component that handles properties must have an interface called `{Component}Props`, where `Component` is the name of the component. As a general rule, any object that is used in two different places must have an interface and be treated as a particular data structure.

### types
types is similar to interfaces in purpose, with the difference that it represents a data type versus a data structure.

### hooks
hooks contains special functions that in most cases represent an extension to React. The most important hook in the application is `useStage`, which returns a `Stage` that is used to handle state.

### utilities
utilities contains the structure and information of the React-independent application.

### views
views is a special directory with special components. This directory does not have index file listing. In general terms, a view is a component that is associated with a route and that is exclusively used in the composer file of the application.