// region import
import React from 'react'

// components
import { Card } from '@/components'

// utilities
import { CardValueProps } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function CardValue(props: CardValueProps) {
  return (
    <Card>
      <div className={styles.container}>
        <div>{props.title}</div>
        <div className={styles.containerValue}>
          <div>{props.sign}</div>
          <div>{props.value}</div>
        </div>
      </div>
    </Card>
  )
}

export default CardValue
