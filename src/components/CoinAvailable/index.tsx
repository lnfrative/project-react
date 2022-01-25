// region import
import React, { useContext, useEffect } from 'react'

// utilities
import { requestId, resources } from 'utilities'

// interfaces
import { CoinAvailableProps } from 'interfaces'

// contexts
import { Modal, Backend } from 'contexts'

// components
import { ImgCoin, BackdropLoader } from 'components'

// modules
import { onClick } from './module'

// styles
import styles from './index.module.css'
// endregion

const { aliases } = resources.endpoints

function CoinAvailable(props: CoinAvailableProps) {
	const backend = useContext(Backend)
	const contextModal = useContext(Modal)
	const endnewaddress = resources.endpoints.get.newaddress.replace(
		aliases.coinId,
		props.id.toString()
	)
	const newaddress = backend.response({ endpoint: endnewaddress, method: 'get' })
	const loading = backend.loading?.id === requestId('get', endnewaddress)

	useEffect(() => {
		if (newaddress) {
			contextModal.commitState({ id: undefined, status: 'close' })
		}
	}, [newaddress])

	return (
		<>
			<div
				onClick={onClick(props, backend.request.get)}
				role="button"
				tabIndex={0}
				className={styles.container}
			>
				<ImgCoin size="small" src={props.srcImageCoin} />
				<div className={styles.details}>
					<div className={styles.id}>{props.asset}</div>
					<div className={styles.separator}>-</div>
					<div className={styles.name}>{props.name}</div>
				</div>
			</div>
			<BackdropLoader open={loading} />
		</>
	)
}

export default CoinAvailable
