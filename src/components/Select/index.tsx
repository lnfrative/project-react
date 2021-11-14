// region import
import React, { useEffect, useState } from 'react'

// components
import { SVGIconTriangleDown } from '@/components'

// hooks
import { useStage, useStrictEffect } from '@/hooks'

// utilities
import { SelectProps } from '@/utilities/Interfaces'

// modules
import {
  initialState,
  onOpen,
  nestStyles,
  onSelect,
} from './module'
// endregion

function Select(props: SelectProps) {
  const [closeId, setCloseId] = useState<number>(0)
  const stage = useStage(initialState)
  const styles = nestStyles(props)

  useEffect(() => {
    const optionSelected = props.options.filter((option) => option.main)[0]
    stage.commitState({
      optionSelected,
    })
    if (props.onSelect) {
      props.onSelect({ option: optionSelected })
    }
  }, [])

  useEffect(() => {
    if (stage.state.status !== 'open') return () => {}
    function close() {
      setCloseId(Math.random())
    }
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [stage.state.status])

  useStrictEffect(() => {
    stage.commitState({ status: 'close' })
  }, [closeId])

  return (
    <div className={styles.container}>
      {stage.state.optionSelected !== undefined && (
        <div role="button" tabIndex={0} onClick={onOpen(stage)} className={styles.optionSelected}>
          <span className={styles.title}>{props.title}</span>
          <span className={styles.valueSelected}>{stage.state.optionSelected.value}</span>
          <SVGIconTriangleDown />
        </div>
      )}
      {stage.state.status === 'open' && (
        <div className={styles.groupOptions}>
          {props.options.map((option) => (
            <div
              role="button"
              tabIndex={0}
              onClick={onSelect(stage, option, props)}
              key={option.id}
              className={styles.option}
            >
              {option.value || option.id}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
