// region import
import React from 'react'

// utilities
import { ButtonCombinationProps } from 'utilities/Interfaces'

// modules
import { nestStyles } from './module'
// endregion

function ButtonCombination(props: ButtonCombinationProps) {
  const styles = nestStyles(props)
  return (
    <button className={styles.button} type="button">
      {props.title}
    </button>
  )
}

export default ButtonCombination
