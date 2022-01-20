// region import
import React from 'react'

// utilities
import { message } from 'utilities'

// components
import { ButtonCombination, ButtonIcon, SVGIconArrowDouble } from 'components'

// styles
import styles from './index.module.css'
// endregion

function WalletActions() {
	return (
		<div className={styles.container}>
			<div className={styles.containerCombination}>
				<div className={styles.space}>
					<ButtonCombination position="after" title={message({ id: 'BUY' })} />
				</div>
				<ButtonCombination position="before" title={message({ id: 'SELL' })} />
			</div>
			<ButtonIcon>
				<SVGIconArrowDouble />
			</ButtonIcon>
		</div>
	)
}

export default WalletActions
