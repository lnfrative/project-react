// region import
import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MUIThemeProvider } from '@mui/material'

// contexts
import { Theme } from 'contexts'

// hooks
import { useStage } from 'hooks'

// modules
import { initialState, switchColorPreference } from './module'
// endregion

function ProvideTheme(props: PropsWithChildren<{}>) {
	const stage = useStage(initialState)
	return (
		<MUIThemeProvider theme={Theme}>
			<ThemeProvider
				theme={{
					...stage.state,
					switchColorPreference: switchColorPreference(stage),
				}}
			>
				{props.children}
			</ThemeProvider>
		</MUIThemeProvider>
	)
}

export default ProvideTheme
