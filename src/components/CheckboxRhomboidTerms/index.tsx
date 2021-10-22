// region import
import React from 'react'

// components
import { CheckboxRhomboid } from '@/components'

// utilities
import { CheckboxRhomboidTermsProps } from '@/utilities/interfaces'
import { message } from '@/utilities'

// styles
import styles from './style.css'
// endregion

function CheckboxRhomboidTerms(props: CheckboxRhomboidTermsProps) {
  return (
    <div className={styles.container}>
      <CheckboxRhomboid {...props.checkboxRhomboidProps} />
      <div className={styles.title}>
        {message({ id: 'AGREE_WITH_THE' })}
        {' '}
        <b className={styles.terms}>{message({ id: 'TERMS_OF_USE' })}</b>
      </div>
    </div>
  )
}

export default CheckboxRhomboidTerms
