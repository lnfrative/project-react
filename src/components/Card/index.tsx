// region import
import React from 'react'

// utilities
import { CardProps } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function Card(props: CardProps) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}

export default Card
