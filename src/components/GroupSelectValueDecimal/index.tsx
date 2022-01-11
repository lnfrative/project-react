// region import
import React from 'react'

// hooks
import { useStage } from 'hooks'

// utilities
import { GroupSelectValueDecimalProps } from 'utilities/Interfaces'

// components
import { Select, ValueDecimal } from 'components'

// styles
import styles from './style.css'

// modules
import { initialState, genOnSelect } from './module'
// endregion

function GroupSelectValueDecimal(props: GroupSelectValueDecimalProps) {
  const stage = useStage(initialState)
  return (
    <div className={styles.container}>
      <Select onSelect={genOnSelect(stage)} design="simple" title={props.titleSelect} options={props.optionsSelect} />
      <div className={styles.containerValues}>
        <ValueDecimal sise="medium" value={props.valueDecimal} />
        <span className={styles.optionValue}>{stage.state.optionSelected?.value}</span>
      </div>
    </div>
  )
}

export default GroupSelectValueDecimal
