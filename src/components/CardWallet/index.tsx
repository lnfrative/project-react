// region import
import React from 'react'

// utilities
import { message } from 'utilities'

// components
import {
  Card, ValueCoin, ButtonCombination, ButtonIcon, SVGIconArrowDouble,
} from 'components'

// styles
import styles from './index.module.css'
// endregion

function CardWallet() {
  return (
    <Card>
      <div className={styles.container}>
        <ValueCoin srcImageCoin="https://i.imgur.com/80rvyLS.png" value={3000} name="DogeCash" shortname="DOGE" />
        <div className={styles.groupButtons}>
          <div className={styles.groupCombination}>
            <ButtonCombination position="after" title={message({ id: 'BUY' })} />
            <ButtonCombination position="before" title={message({ id: 'SELL' })} />
          </div>
          <ButtonIcon>
            <SVGIconArrowDouble />
          </ButtonIcon>
        </div>
      </div>
    </Card>
  )
}

export default CardWallet
