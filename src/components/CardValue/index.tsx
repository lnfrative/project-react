// region import
import React from 'react'

// components
import { Card } from 'components'

// utilities
import { CardValueProps } from 'utilities/Interfaces'

// styles
import styles from './index.module.css'
// endregion

function CardValue(props: CardValueProps) {
  return (
    <Card>
      <div className={styles.container}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.containerValue}>
          <div className={styles.sign}>{props.sign}</div>
          <div className={styles.value}>{props.value}</div>
        </div>
      </div>
    </Card>
  )
}

export default CardValue
