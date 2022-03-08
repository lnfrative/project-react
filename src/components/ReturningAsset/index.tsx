// region import
import React, { useContext } from 'react'

// contexts
import { Backend } from 'contexts'

// interfaces
import { BackendReturningAsset, BackendCoin } from 'interfaces'

// components
import { ImgCoin, ValueDecimal } from 'components'

// utilities
import { resources, message } from 'utilities'

// styles
import { Container, Group, PrimaryTitle, SecondaryTitle } from './style'
// endregion

function ReturningAsset(props: BackendReturningAsset) {
	const backend = useContext(Backend)

	const coins: Array<BackendCoin> = backend.response({
		endpoint: resources.endpoints.get.coins,
		method: 'get',
	})?.data

	const [coin] = coins.filter(({ id }) => id === props.coin_id)

	return (
		<Container>
			<ImgCoin
				size="medium"
				src={resources.coin[resources.utils.normaliceCoinName(coin.name)].logo}
			/>
			<Group>
				<PrimaryTitle>{coin.asset}</PrimaryTitle>
				<SecondaryTitle>{message({ id: coin.staking ? 'STAKING' : 'MINING' })}</SecondaryTitle>
			</Group>
			<Group>
				<PrimaryTitle>
					<ValueDecimal sameSize decimals={2} sign="$" value={props.generated} sise="small" />
				</PrimaryTitle>
				<SecondaryTitle>{message({ id: 'GENERATED' })}</SecondaryTitle>
			</Group>
			<Group>
				<PrimaryTitle>
					<ValueDecimal
						sameSize
						decimals={2}
						sign="%"
						signPosition="right"
						value={props.ROI}
						sise="small"
					/>
				</PrimaryTitle>
				<SecondaryTitle>{message({ id: 'ROI' })}</SecondaryTitle>
			</Group>
		</Container>
	)
}

export default ReturningAsset
