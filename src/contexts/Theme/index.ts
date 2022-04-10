// region import
import { createTheme } from '@mui/material'
// endregion

// TODO: Move this theme object at the correct place, it's not a context.
const Theme = createTheme({
	palette: {
		mode: "dark",
		info: {
			main: 'rgba(208, 203, 230, 0.5)',
		},
		background: {
			paper: '#18171d',
			default: '#18171d'
		},
	},
	typography: {
		fontFamily: 'Aileron',
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
				}
			}
		}
	}
})

export default Theme
