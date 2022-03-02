// region import
import { createTheme } from '@mui/material'
// endregion

// TODO: Move this theme object at the correct place, it's not a context.
const Theme = createTheme({
	palette: {
		mode: 'dark',
		text: {
			primary: '#d0cbe6',
			secondary: '#b0a9e6',
			disabled: 'rgba(208, 203, 230, 0.5)',
		},
		primary: {
			main: '#18171d',
			dark: '#18171d',
		},
		secondary: {
			main: '#ffa068',
		},
		error: {
			main: '#ff8c8c',
		},
		warning: {
			main: '#ffb677',
		},
		info: {
			main: 'rgba(208, 203, 230, 0.5)',
		},
		success: {
			main: '#b0a9e6',
		},
	},
	typography: {
		fontFamily: 'Aileron',
	},
})

export default Theme
