interface Theme {
	spaceUnit: string
	colorPreference: 'dark' | 'light'

	color: {
		passiveMain: string
		passiveSecondary: string
		passivePager: string
		activeMain: string
		activeMainShadow: string
		activeSecondary: string
		varietyMain: string
		varietyMainShadow: string
		varietyMainTinyShadow: string
		varietyUpstream: string
		varietyDownstream: string
		disableMainShadow: string
		activeLoad: string
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

	size: {
		huge: string
		xxl: string
		xl: string
		lg: string
		md: string
		sm: string
		xs: string
		xxs: string
		xxxs: string
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
}

export default Theme
