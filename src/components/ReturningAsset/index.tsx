// region import
import React from 'react'

// hooks
import { useApiStore } from 'hooks'

// interfaces
import { BackendReturningAsset } from 'interfaces'

// components
import { ImgCoin, ValueDecimal } from 'components'

// utilities
import { resources, message } from 'utilities'

// styles
import { Container, Group, PrimaryTitle, SecondaryTitle, ReturningAssetSkeleton } from './style'
// endregion

function ReturningAsset(props: BackendReturningAsset) {
	const api = useApiStore()

	const [coin] = api.coins.data.filter(({ id }) => id === props.coin_id)

	return (
		<Container>
			{coin && (
				<ImgCoin
					size="medium"
					src={resources.coin[resources.utils.normaliceCoinName(coin.name)].logo}
				/>
			)}
			<Group>
				<PrimaryTitle>{coin?.asset}</PrimaryTitle>
				<SecondaryTitle>{message({ id: coin?.staking ? 'STAKING' : 'MINING' })}</SecondaryTitle>
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

export { ReturningAssetSkeleton }

export default ReturningAsset
