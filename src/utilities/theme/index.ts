const spaceUnit = '1rem'
const colorPreference: 'dark' | 'light' = 'dark'

const lightColor = {
	passiveMain: 'red',
	passiveSecondary: '#0e0e11',
	passivePager: '#27262d',
	activeMain: '#ffb677',
	activeMainShadow: 'rgba(255, 182, 119, 0.7)',
	activeSecondary: '#b0a9e6',
	varietyMain: '#d0cbe6',
	varietyMainShadow: 'rgba(208, 203, 230, 0.5)',
	varietyMainTinyShadow: 'rgba(208, 203, 230, 0.05)',
	varietyUpstream: '#c8fca3',
	varietyDownstream: '#ff8c8c',
	disableMainShadow: 'rgba(0, 0, 0, 0.5)',
	activeLoad: '#6346EA',
	white: 'white',
}

const darkColor = {
	passiveMain: '#18171d',
	passiveSecondary: '#0e0e11',
	passivePager: '#27262d',
	activeMain: '#ffb677',
	activeMainShadow: 'rgba(255, 182, 119, 0.7)',
	activeSecondary: '#b0a9e6',
	varietyMain: '#d0cbe6',
	varietyMainShadow: 'rgba(208, 203, 230, 0.5)',
	varietyMainTinyShadow: 'rgba(208, 203, 230, 0.05)',
	varietyUpstream: '#c8fca3',
	varietyDownstream: '#ff8c8c',
	disableMainShadow: 'rgba(0, 0, 0, 0.5)',
	activeLoad: '#6346EA',
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

const size = {
	huge: '65px',
	xxl: '35px',
	xl: '30px',
	lg: '24px',
	md: '20px',
	sm: '18px',
	xs: '16px',
	xxs: '14px',
	xxxs: '12px',
}

const space = {
	xxxxs: `calc(0.125 * ${spaceUnit})`,
	xxxs: `calc(0.25 * ${spaceUnit})`,
	xxs: `calc(0.375 * ${spaceUnit})`,
	xs: `calc(0.5 * ${spaceUnit})`,
	sm: `calc(0.75 * ${spaceUnit})`,
	md: `calc(1.25 * ${spaceUnit})`,
	lg: `calc(2 * ${spaceUnit})`,
	xl: `calc(3.25 * ${spaceUnit})`,
	xxl: `calc(5.25 * ${spaceUnit})`,
	xxxl: `calc(8.5 * ${spaceUnit})`,
}

const mediaQuery = {
	xxs: `@media screen and (min-width: 320px)`,
	xs: `@media screen and (min-width: 375px)`,
	sm: `@media screen and (min-width: 425px)`,
	md: `@media screen and (min-width: 768px)`,
	lg: `@media screen and (min-width: 1024px)`,
	xl: `@media screen and (min-width: 1440px)`,
}

export const theme = {
	darkColor,
	lightColor,
	color,
	colorPreference,
	mediaQuery,
	space,
	opacity,
	spaceUnit,
	size,
}
