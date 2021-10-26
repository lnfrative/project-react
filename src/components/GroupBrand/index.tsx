// region import
import React from 'react'

// components
import { SVGIconApps } from '@/components'

// utilities
import { externalResources } from '@/utilities'

// styles
import styles from './style.css'
// endregion

function GroupBrand() {
  return (
    <div className={styles.container}>
      <SVGIconApps />
      <img
        alt={externalResources.dogeCashLogoIcon.alt}
        src={externalResources.dogeCashLogoIcon.src}
        width={externalResources.dogeCashLogoIcon.width}
        height={externalResources.dogeCashLogoIcon.height}
      />
    </div>
  )
}

export default GroupBrand