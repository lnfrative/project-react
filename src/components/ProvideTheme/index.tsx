// region import
import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

// hooks
import { useStage } from 'hooks'

// modules
import { initialState, switchColorPreference } from './module'
// endregion

function ProvideTheme(props: PropsWithChildren<{}>) {
	const stage = useStage(initialState)
	return (
		<ThemeProvider
			theme={{
				...stage.state,
				switchColorPreference: switchColorPreference(stage),
			}}
		>
			{props.children}
		</ThemeProvider>
	)
}

export default ProvideTheme
