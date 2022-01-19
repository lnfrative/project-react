import React from 'react'
import {
	ProvideContextBackend,
	ProvideContextCoin,
	ProvideContextCurrency,
	ProvideContextModal,
	ProvideContextView,
} from '../src/components'

import 'css/fonts/Aileron/index.css'
import 'css/index.css'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}


export const decorators = [
	(Story) => (
	<ProvideContextBackend>
		<ProvideContextModal>
			<ProvideContextView>
				<ProvideContextCoin>
					<ProvideContextCurrency>
						<Story />
					</ProvideContextCurrency>
				</ProvideContextCoin>
			</ProvideContextView>
		</ProvideContextModal>
	</ProvideContextBackend>
	)
]