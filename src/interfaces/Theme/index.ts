// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultTheme as StyledDefaultTheme } from 'styled-components'

interface Theme {
	spaceUnit: string
	colorPreference: 'dark' | 'light'

	color: {
		passiveMain: string
		passiveSecundary: string
		passivePager: string
		activeMain: string
		activeMainShadow: string
		activeSecundary: string
		varietyMain: string
		varietyMainShadow: string
		varietyMainTinyShadow: string
		varietyUpstream: string
		varietyDownstream: string
		disableMainShadow: string
		white: string
	}

	space: {
		xxxxs: string
		xxxs: string
		xxs: string
		xs: string
		sm: string
		md: string
		lg: string
		xl: string
		xxl: string
		xxxl: string
	}

	mediaQuery: {
		xxs: string
		xs: string
		sm: string
		md: string
		lg: string
		xl: string
	}

	opacity: {
		selecting: string
		selected: string
		hover: string
	}

	fn: {
		switchColorPreference: (theme: Theme) => void
	}
}

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
