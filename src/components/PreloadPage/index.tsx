// region import
import React, { useContext } from 'react'

// utilities
import { externalResources, message } from '@/utilities'

// contexts
import { Backend } from '@/contexts'

// styles
import styles from './style.css'
// endregion

function PreloadPage() {
  const { loading } = useContext(Backend)

  return (
    <div className={styles.container}>
      <img
        alt={externalResources.dogeCashLogoIcon.alt}
        src={externalResources.dogeCashLogoIcon.src}
        width={externalResources.dogeCashLogoIcon.width}
        height={externalResources.dogeCashLogoIcon.height}
      />
      <div className={styles.info}>
        {!!loading?.label && message({ id: loading.label })}
      </div>
    </div>
  )
}

export default PreloadPage
