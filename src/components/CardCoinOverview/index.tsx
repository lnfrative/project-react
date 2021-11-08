// region import
import React from 'react'

// components
import { Card, GroupValueDecimal } from '@/components'

// styles
import styles from './style.css'
// endregion

function CardCoinOverview() {
  return (
    <Card>
      <div className={styles.containerBenefits}>
        <div className={styles.titleBenefits}>Pool benefits</div>
        <div className={styles.containerBenefitsValues}>
          <GroupValueDecimal design="bottom" value={90.31203} title="Yesterday" />
          <GroupValueDecimal design="bottom" value={812.14992} title="Last month" />
          <GroupValueDecimal design="bottom" value={9000.14992} title="Last year" />
        </div>
      </div>
    </Card>
  )
}

export default CardCoinOverview
