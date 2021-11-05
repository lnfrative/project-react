// region import
import React from 'react'

// utilities
import { message } from '@/utilities'

// components
import { GroupSelectValueDecimal, GroupValueDecimal } from '@/components'

// styles
import styles from './style.css'
// endregion

const testOptions = [
  { id: 'BTC', value: 'BTC', main: true },
  { id: 'USD', value: 'USD' },
]

function GroupCoinValues() {
  return (
    <div className={styles.container}>
      <GroupValueDecimal title={message({ id: 'HOLDING' })} value={238.0000012} />
      <div className={styles.containerSelectValues}>
        <GroupSelectValueDecimal valueDecimal={0.4568036} titleSelect="Worth in" optionsSelect={testOptions} />
        <GroupSelectValueDecimal valueDecimal={0.4568036} titleSelect="Price in" optionsSelect={testOptions} />
      </div>
    </div>
  )
}

export default GroupCoinValues
