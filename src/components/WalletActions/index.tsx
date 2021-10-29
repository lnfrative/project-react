// region import
import React from 'react'

// utilities
import { message } from '@/utilities'

// components
import { ButtonCombination } from '@/components'

// styles
import styles from './style.css'
// endregion

function WalletActions() {
  return (
    <div className={styles.container}>
      <div className={styles.containerCombination}>
        <ButtonCombination
          position="after"
          title={message({ id: 'BUY' })}
        />
        <ButtonCombination
          position="before"
          title={message({ id: 'SELL' })}
        />
      </div>
    </div>
  )
}

export default WalletActions
