# Source structure

## components
Components is the place where all the components of the application are located. It is a set of directories of the form `components/{Component}/index.tsx` where `Component` is the name of the component, always in Capitalize. That is, each component is a directory inside `components`. A component can never have subcomponents, so avoid things like `components/{Component}/components/`, if a component needs to be broken down into subcomponents, these subcomponents should be treated as standalone components and placed at the `components level `.

## contexts (outdated*)
Contexts holds the contexts of the application. Contexts are data used to preserve information in the application independent of the component life cycle. In this way a state is preserved.

## interfaces
Interfaces contains the models of the objects handled in the different parts of the application. Every component that handles properties must have an interface called `{Component}Props`, where `Component` is the name of the component. As a general rule, any object that is used in two different places must have an interface and be treated as a particular data structure.

## types
Types is similar to interfaces in purpose, with the difference that it represents a data type versus a data structure.

## hooks
Hooks contains special functions that in most cases represent an extension to React. The most important hook in the application is `useStage`, which returns a `Stage` that is used to handle state.

## utilities (refactor**)
Utilities contains the structure and information of the React-independent application.

## views
Views is a special directory with special components. This directory does not have index file listing. In general terms, a view is a component that is associated with a route and that is exclusively used in the composer file of the application.

## stores (refactor**)
In this directory all the Redux reducers, including the actions. This directory is an exception to the absolute import rule, since an absolute import must be used to import actions from a particular reducer.

(*) It means that the directory should be prevented from being used and worked on due to future deletion.

(**) The directory needs a major remodeling of its structure or its elements.