import styled from 'styled-components'

export const StyledPanel = styled('div')`
	margin-bottom: ${props => props.theme.space.lg};
`

export const ContainerCheckbox = styled.div`
	margin-bottom: ${props => props.theme.space.lg};

	display: flex;
	align-items: center;

	color: ${props => props.theme.color.varietyMainShadow};
`

export const StyledCheckbox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: ${props => props.theme.space.sm};
	height: 44px;
	width: 44px;
`

export const Values = styled('div')`
	display: grid;
	gap: ${props => props.theme.space.xl};

	${props => props.theme.mediaQuery.lg} {
		display: flex;
		gap: none;
		justify-content: space-between;
		align-items: center;
	}
`

export const TableAssets = styled.div`
	width: 100%;
	display: none;

	${props => props.theme.mediaQuery.md} {
		display: block;
	}
`

export const CoinAssets = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-between;

	${props => props.theme.mediaQuery.sm} {
		flex-direction: row;
	}

	${props => props.theme.mediaQuery.md} {
		display: none;
	}
`

export const StyledCoinAsset = styled.div`
	margin-bottom: ${props => props.theme.space.xl};
`