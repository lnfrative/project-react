// region import
import React from 'react'

// utilities
import { message } from 'utilities'

// components
import { GroupSelectValueDecimal, GroupValueDecimal, GroupSelectValueVariation } from 'components'

// styles
import styles from './index.module.css'
// endregion

const testOptions = [
  { id: 'BTC', value: 'BTC', main: true },
  { id: 'USD', value: 'USD' },
]

const testTimeOptions = [
  { id: 86400, value: '24 hours', main: true },
  { id: 604800, value: '7 days' },
  { id: 2419200, value: '28 days' },
]

function GroupCoinValues() {
  return (
    <div className={styles.container}>
      <GroupValueDecimal design="top" title={message({ id: 'HOLDING' })} value={238.0000012} />
      <div className={styles.containerSelectValues}>
        <GroupSelectValueDecimal valueDecimal={0.4568036} titleSelect="Worth in" optionsSelect={testOptions} />
        <GroupSelectValueDecimal valueDecimal={0.4568036} titleSelect="Price in" optionsSelect={testOptions} />
        <GroupSelectValueVariation valueVariation={12.5} titleSelect="Last" optionsSelect={testTimeOptions} />
      </div>
    </div>
  )
}

export default GroupCoinValues
