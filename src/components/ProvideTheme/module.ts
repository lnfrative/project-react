import { Theme, Stage } from 'interfaces'
import { theme } from 'utilities'

const { spaceUnit, darkColor, colorPreference, space, mediaQuery, opacity, lightColor } = theme

const initialState: Theme = {
	colorPreference,
	color: darkColor,
	space,
	mediaQuery,
	opacity,
	spaceUnit,
}

function switchColorPreference(stage: Stage<Theme>) {
	return () => {
		stage.commitState({
			...stage.state,
			color: stage.state.colorPreference === 'dark' ? lightColor : darkColor,
			colorPreference: stage.state.colorPreference === 'dark' ? 'light' : 'dark',
		})
	}
}

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {
		switchColorPreference: () => void
	}
}

export { initialState, switchColorPreference }
