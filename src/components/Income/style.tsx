import React from 'react'
import styled from 'styled-components'
import { Skeleton } from '@mui/material'

// skeletons
import { LoadLineLabelSkeleton } from 'components/LoadLineLabel'
import { ReturningAssetSkeleton } from 'components/ReturningAsset'

// components
import {
	Panel,
	ValueDecimal,
	Select,
} from 'components'

export const Container = styled('div')`
	display: flex;
	flex-direction: column;

	${props => props.theme.mediaQuery.xl} {
		flex-direction: row;
	}
`

export const StyledPanel = styled('div')`
	margin-bottom: ${props => props.theme.space.lg};
`

export const Revenues = styled('div')`
	display: grid;
	gap: ${props => props.theme.space.xl};

	${props => props.theme.mediaQuery.lg} {
		display: flex;
		gap: none;
		justify-content: space-between;
		align-items: center;
	}
`

export const PrimaryContent = styled('div')`
	${props => props.theme.mediaQuery.xl} {
		width: 70%;
	}
`

export const SecondaryContent = styled('div')`
	${props => props.theme.mediaQuery.xl} {
		margin-left: ${props => props.theme.space.lg};
		width: 30%;
	}
`

export const StyledLoadLineLabel = styled('div')`
	margin-bottom: ${props => props.theme.space.lg};
`

export const StatsHead = styled('div')`
	letter-spacing: 4.1px;
	font-weight: bold;
	${props =>
		`
        font-size: ${props.theme.size.sm};
        color: ${props.theme.color.varietyMainShadow};
        margin: ${props.theme.space.xl} 0;
      `}
`

export const ContainerValue = styled('div')`
	/* empty */
`

export const LoaderContainer = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;

	color: ${props => props.theme.color.varietyMainShadow};
`

export const ContainerSwitch = styled('div')`
	display: flex;
	justify-content: flex-end;
	width: 100%;
`

export function IncomeSecondaryContentSkeleton() {
	return (
		<SecondaryContent>
			<StyledPanel>
				<Panel title="Income stats">
					<ContainerSwitch>
						<Skeleton>
							<Select
								design="simple"
								options={[{
									id: 'test', value: 'value', main: true,
								}]}
							/>
						</Skeleton>
					</ContainerSwitch>
					<Skeleton>
						<StatsHead style={{ marginTop: 0 }}>Origin</StatsHead>
					</Skeleton>
					<StyledLoadLineLabel>
						<LoadLineLabelSkeleton />
					</StyledLoadLineLabel>
					<StyledLoadLineLabel>
						<LoadLineLabelSkeleton />
					</StyledLoadLineLabel>

					<Skeleton>
						<StatsHead>Collateral assets</StatsHead>
					</Skeleton>
			
					<ContainerValue>
						<Skeleton>
							<ValueDecimal
								sameSize
								decimals={2}
								sign="$"
								sise="large"
								value={0}
							/>
						</Skeleton>

					</ContainerValue>

					<Skeleton>
						<StatsHead>ROI</StatsHead>
					</Skeleton>
					<ContainerValue>
						<Skeleton>
							<ValueDecimal
								sameSize
								decimals={2}
								sign="%"
								signPosition="right"
								sise="large"
								value={0}
							/>
						</Skeleton>
					</ContainerValue>

					<Skeleton>
						<StatsHead>Top returning assets</StatsHead>
					</Skeleton>
					<ReturningAssetSkeleton />
				</Panel>
			</StyledPanel>
		</SecondaryContent>
	)
}