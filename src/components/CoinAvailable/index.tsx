// region import
import React, { useContext, useEffect } from 'react'
import { Backdrop, CircularProgress } from '@mui/material'

// utilities
import { requestId, resources } from '@/utilities'
import { CoinAvailableProps } from '@/utilities/Interfaces'

// contexts
import { Modal, Backend } from '@/contexts'

// components
import { ImgCoin } from '@/components'

// modules
import { onClick } from './module'

// styles
import styles from './style.css'
// endregion

const { aliases } = resources.endpoints

function CoinAvailable(props: CoinAvailableProps) {
  const backend = useContext(Backend)
  const contextModal = useContext(Modal)
  const endnewaddress = resources.endpoints.get.newaddress.replace(
    aliases.coinId, props.id.toString(),
  )
  const newaddress = backend.response.get({ endpoint: endnewaddress })
  const loading = backend.loading?.id === requestId('GET', endnewaddress)

  useEffect(() => {
    if (newaddress) {
      contextModal.commitState({ id: undefined, status: 'close' })
    }
  }, [newaddress])

  return (
    <>
      <div onClick={onClick(props, backend.request.get)} role="button" tabIndex={0} className={styles.container}>
        <ImgCoin size="small" src={props.srcImageCoin} />
        <div className={styles.details}>
          <div className={styles.id}>{props.asset}</div>
          <div className={styles.separator}>-</div>
          <div className={styles.name}>{props.name}</div>
        </div>
      </div>
      <Backdrop open={loading} sx={{ zIndex: 10 }}>
        <CircularProgress />
      </Backdrop>
    </>
  )
}

export default CoinAvailable
