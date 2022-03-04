const messages: Record<string, Record<string, any>> = {
	AGREE_WITH_THE: {
		en: 'I agree with the',
		es: 'Estoy de acuerdo con los',
	},
	TERMS_OF_USE: {
		en: 'Terms of Use',
		es: 'Términos de uso',
	},
	PASSWORD: {
		en: 'Password',
		es: 'Contraseña',
	},
	EMAIL: {
		en: 'Email',
		es: 'Correo electrónico',
	},
	REPEAT_PASSWORD: {
		en: 'Repeat Password',
		es: 'Repetir contraseña',
	},
	CREATE_AN_ACCOUNT: {
		en: 'Create an account',
		es: 'Crear una cuenta',
	},
	SIGN_UP: {
		en: 'Sign up',
		es: 'Registrarse',
	},
	ALREADY_HAVE_ACCUONT: {
		en: 'Already have an account?',
		es: '¿Ya tienes una cuenta?',
	},
	LOG_IN: {
		en: 'Log In',
		es: 'Iniciar sesión',
	},
	INVALID_EMAIL: {
		en: 'The email entered is not valid.',
		es: 'El email ingresado no es válido.',
	},
	INVALID_PASSWORD: {
		en: 'The password needs a minimum of 12 characters in length.',
		es: 'La contraseña necesita mínimo 12 caractéres de longitud.',
	},
	PASSWORD_NOT_MATCH: {
		en: 'Password does not match.',
		es: 'La contraseña no coincide.',
	},
	FORGOT_PASSWORD: {
		en: 'Forgot your password?',
		es: '¿Olvidaste tu contraseña?',
	},
	DONT_HAVE_ACCOUNT: {
		en: "Don't have an account yet?",
		es: '¿Todavía no tienes cuenta?',
	},
	DASHBOARD: {
		en: 'Dashboard',
		es: 'Tablero',
	},
	POOL_DATA: {
		en: 'Pool data',
		es: 'Datos agrupados',
	},
	SETTINGS: {
		en: 'Settings',
		es: 'Ajustes',
	},
	MOVEMENT_HISTORY: {
		en: 'Movement history',
		es: 'Movimientos',
	},
	ADDRESS_BOOK: {
		en: 'Address book',
		es: 'Direcciones',
	},
	SIGN_OUT: {
		en: 'Sign out',
		es: 'Cerrar sesión',
	},
	BUY: {
		en: 'Buy',
		es: 'Comprar',
	},
	SELL: {
		en: 'Sell',
		es: 'Vender',
	},
	ADD_NEW_WALLET: {
		en: 'Add a new wallet',
		es: 'Añadir nuevo monedero',
	},
	SEEING: {
		en: 'Seeing',
		es: 'Viendo',
	},
	BACK_TO: {
		en: 'Back to',
		es: 'Volver al',
	},
	HOLDING: {
		en: 'Holding',
		es: 'Monto',
	},
	AVAILABLE_COINS: {
		en: 'Available coins',
		es: 'Monedas disponibles',
	},
	NO_WALLETS_CREATED: {
		en: 'There is no wallet created yet.',
		es: 'Aún no has creado alguna billetera.',
	},
	LOADING_CSRF: {
		en: 'Loading CSRF protection.',
		es: 'Cargando protección CSRF',
	},
	LOADING_SESSION: {
		en: 'Loading session.',
		es: 'Cargando sesión.',
	},
	LOADING_COINS: {
		en: 'Loading available currencies.',
		es: 'Cargando monedas disponibles',
	},
	LOADING_WALLLETS: {
		en: 'Loading wallets.',
		es: 'Cargando billeteras.',
	},
	LONG_TIME_ACTION: {
		en: 'This could take a few seconds.',
		es: 'Esta acción puede tomar unos segundos, no recargues la página.',
	},
	VERIFYING_EMAIL: {
		en: 'Verification is in progress.',
		es: 'La verificación está en curso',
	},
	SEND: {
		en: 'Send',
		es: 'Enviar',
	},
	RECOVER_PASSWORD: {
		en: 'Recover password',
		es: 'Recuperar contraseña',
	},
	VERIFICATION_EMAIL_SENT: {
		en: 'A verification email has been sent.',
		es: 'Un correo de verificación ha sido enviado',
	},
	DISABE_EMAIL_CHANGE: {
		en: "For security reasons, you can't change your email manually.",
		es: 'Por motivos de seguridad, no puedes cambiar tu email manualmente.',
	},
	CHANGE_PASSWORD: {
		en: 'Change password',
	},
	CHANGE_EMAIL: {
		en: 'Change email',
	},
	CURRENT_PASSWORD: {
		en: 'Current password',
	},
	NEW_PASSWORD: {
		en: 'New password',
	},
	BALANCE: {
		en: 'Balance',
	},
	RETRIEVING_CAPTCHA_KEY: {
		en: 'Retrieving captcha key.',
	},
	CAPTCHA_VERIFICTION: {
		en: 'Captcha verification',
	},
	TWO_FACTOR_AUTH: {
		en: 'Two-factor verification',
	},
	ENABLE: {
		en: 'Enable',
	},
	ENABLE_TWO_FACTOR: {
		en: 'Enable two-factor',
	},
	ENABLE_TWO_FACTOR_INFO: {
		en: 'Scan this code using any authenticator app, such as the free "Google Authenticator" (Android and iOS). This software generates a time-based one-time password that you\'ll need to enter to authenticate yourself.',
	},
	ENTER_OTP: {
		en: 'Enter OTP',
	},
	DEACTIVATE: {
		en: 'Deactivate',
	},
	DEACTIVATE_TWO_FACTOR: {
		en: 'For security reasons, you cannot manually disable two-factor verification.',
	},
	GETTING_BALANCES: {
		en: 'Getting balances.',
	},
	CREATED: {
		en: 'Created',
	},
	VALIDATED: {
		en: 'Validated',
	},
	CONFIRMED: {
		en: 'Confirmed',
	},
	APPROVED: {
		en: 'Approved',
	},
	COMPLETED: {
		en: 'Completed',
	},
	LAST_MOVEMENTS: {
		en: 'Last movements',
	},
	EMPTY_TRANSACTIONS_HISTORY: {
		en: 'Empty transaction history.',
	},
	ALL_MOVEMENTS: {
		en: 'All movements',
	},
	RECEIVED: {
		en: 'Received',
	},
	SPENT: {
		en: 'Spent',
	},
	EARNED: {
		en: 'Earned',
	},
	NET_INCOME: {
		en: 'Net income',
	},
	ASSETS_SUMMARY: {
		en: 'Assets summary',
	},
	PRICE: {
		en: 'Price',
	},
	CHANGE_30D: {
		en: 'Change (30d)',
	},
	HOLDING_VALUE: {
		en: 'Holding value',
	},
	EMPTY_ADDRESS: {
		en: 'You dont have a generated address.',
	},
	PENDING: {
		en: 'Pending',
	},
	LAST_30_DAYS: {
		en: 'Last 30 days',
	},
	RESENDING_EMAIL: {
		en: 'Resending the verification email, do not reload the page.',
	},
	REVENUE_SUMMARY: {
		en: 'Revenue summary',
	},
	REVENUE_PER_MONTH: {
		en: 'Revenue per month',
	},
	MINING: {
		en: 'Mining',
	},
	STAKING: {
		en: 'PoS/MN',
	},
	GENERATED: {
		en: 'Generated',
	},
	ROI: {
		en: 'ROI',
	},
	EXCLUDE_REWARDS: {
		en: 'Exclude rewards',
	},
}

export default messages
