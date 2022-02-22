import { Theme } from 'interfaces'

const spaceUnit = '1rem'
const colorPreference: 'dark' | 'light' = 'dark'

const lightColor = {
	passiveMain: '#18171d',
	passiveSecundary: '#0e0e11',
	passivePager: '#27262d',
	activeMain: '#ffb677',
	activeMainShadow: 'rgba(255, 182, 119, 0.7)',
	activeSecundary: '#b0a9e6',
	varietyMain: '#d0cbe6',
	varietyMainShadow: 'rgba(208, 203, 230, 0.5)',
	varietyMainTinyShadow: 'rgba(208, 203, 230, 0.05)',
	varietyUpstream: '#c8fca3',
	varietyDownstream: '#ff8c8c',
	disableMainShadow: 'rgba(0, 0, 0, 0.5)',
	white: 'white',
}

const darkColor = {
	passiveMain: '#18171d',
	passiveSecundary: '#0e0e11',
	passivePager: '#27262d',
	activeMain: '#ffb677',
	activeMainShadow: 'rgba(255, 182, 119, 0.7)',
	activeSecundary: '#b0a9e6',
	varietyMain: '#d0cbe6',
	varietyMainShadow: 'rgba(208, 203, 230, 0.5)',
	varietyMainTinyShadow: 'rgba(208, 203, 230, 0.05)',
	varietyUpstream: '#c8fca3',
	varietyDownstream: '#ff8c8c',
	disableMainShadow: 'rgba(0, 0, 0, 0.5)',
	white: 'white',
}

const color = {
	...darkColor,
}

const opacity = {
	selecting: '0.85',
	selected: '1',
	hover: '0.75',
}

const space = {
	xxxxs: `calc(0.125 * var(${spaceUnit}))`,
	xxxs: `calc(0.25 * var(${spaceUnit}))`,
	xxs: `calc(0.375 * var(${spaceUnit}))`,
	xs: `calc(0.5 * var(${spaceUnit}))`,
	sm: `calc(0.75 * var(${spaceUnit}))`,
	md: `calc(1.25 * var(${spaceUnit}))`,
	lg: `calc(2 * var(${spaceUnit}))`,
	xl: `calc(3.25 * var(${spaceUnit}))`,
	xxl: `calc(5.25 * var(${spaceUnit}))`,
	xxxl: `calc(8.5 * var(${spaceUnit}))`,
}

const mediaQuery = {
	xxs: `@media screen and (min-width: 320px)`,
	xs: `@media screen and (min-width: 375px)`,
	sm: `@media screen and (min-width: 425px)`,
	md: `@media screen and (min-width: 768px)`,
	lg: `@media screen and (min-width: 1024px)`,
	xl: `@media screen and (min-width: 1440px)`,
}

const fn = {
	switchColorPreference(theme: Theme): Theme {
		return {
			...theme,
			color: theme.colorPreference === 'light' ? darkColor : lightColor,
		}
	},
}

export const theme: Theme = {
	color,
	colorPreference,
	mediaQuery,
	space,
	opacity,
	spaceUnit,
	fn,
}
