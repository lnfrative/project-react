# Dev guidelines

## Directories and subdirectories

Directories found in `src` should be treated as categorical sets. From them you must access any Entity found in the directory.

Example:

- `import useStage from 'hooks/useStage'` (incorrect)
- `import { useStage } from 'hooks''` (correct)

You should avoid using explicit imports as much as possible, except for known cases that need a refactoring, as it happens in the `utilities` directory.

Categorical directories must always be named in lowercase and plural.

## Component structure

css files should be avoided as much as possible. To style components we use a styling template, like `styled()` from MUI.
Components that use styled() must be defined in a styles.tsx file.

Only the component that constitutes its body, that is, the highest level component, must be found in index.tsx.

The functions of a component must be in a file module.ts

Component stories made to be previewed in Storybook must be made in index.stories.tsx.

Thus, a component's directory looks like this:

`components/ComponentName/index.tsx`

`components/ComponentName/index.stories.tsx`

`components/ComponentName/module.ts`

`components/ComponentName/styles.tsx`

**A component must never have subcomponents in its directory. If a component is too big, it should be split into other components which will be placed in /components.**