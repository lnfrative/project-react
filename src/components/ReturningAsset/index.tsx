// region import
import React from 'react'

// components
import { ImgCoin } from 'components'

// styles
import { Container, Group, PrimaryTitle, SecondaryTitle } from './style'
// endregion

function ReturningAsset() {
	return (
		<Container>
			<ImgCoin
				size="medium"
				src="https://dev-api-account.dogecash.org/assets/coins/Bitcoin/logo.svg"
			/>
			<Group>
				<PrimaryTitle>BTC</PrimaryTitle>
				<SecondaryTitle>Mining</SecondaryTitle>
			</Group>
			<Group>
				<PrimaryTitle>$13,700</PrimaryTitle>
				<SecondaryTitle>Generated</SecondaryTitle>
			</Group>
			<Group>
				<PrimaryTitle>167%</PrimaryTitle>
				<SecondaryTitle>ROI</SecondaryTitle>
			</Group>
		</Container>
	)
}

export default ReturningAsset
