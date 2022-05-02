// region import
import React, { useEffect } from 'react'
import { Skeleton } from '@mui/material'

// hooks
import { useStage, useSessionStore } from 'hooks'

// components
import {
	Panel,
	ChartCurve,
	ValueDecimalLabel,
	LoadLineLabel,
	ValueDecimal,
	ReturningAsset,
	Select,
} from 'components'

// utilities
import { message } from 'utilities'

// styles
import {
	Container,
	StyledPanel,
	Revenues,
	PrimaryContent,
	SecondaryContent,
	StyledLoadLineLabel,
	StatsHead,
	ContainerValue,
	LoaderContainer,
	ContainerSwitch,
	IncomeSecondaryContentSkeleton,
} from './style'

// modules
import {
	initialState,
	options,
	onSelectTimeChart,
	onSelectTimeOrigin,
	fetchRevenueChart,
	fetchRevenueSummary,
	fetchAssetsAndRoi,
	fetchIncomeOrigin,
	fetchReturningAssets
} from './module'
// endregion

// TODO: Avoid calling fetches if the requested data already exists in the store.
// TODO: Use skeleton instead of circular loaders
function Income() {
	const session = useSessionStore()
	const stage = useStage(initialState)

	useEffect(() => {
		if (session.user.data) {
			const params = {
				currency: session.currency,
				period: 'year',
			}

			fetchRevenueSummary(params)
		}
	}, [session.user])

	useEffect(() => {
		const { optionSelectedRevenueChart } = stage.state
		if (session.user.data && optionSelectedRevenueChart?.id) {
			const params = {
				currency: session.currency,
				period: optionSelectedRevenueChart.id,
			}
			fetchRevenueChart(params)
		}
	}, [session.user, stage.state.optionSelectedRevenueChart])

	useEffect(() => {
		const period = stage.state.optionSelectedIncomOrigin?.id
		if (period) {
			const params = {
				currency: session.currency,
				period,
			}

			const requestId = JSON.stringify(params)
			if (session.user.data && requestId !== session.incomeOrigin.id) {
				fetchAssetsAndRoi(params)
				fetchIncomeOrigin(params)
				fetchReturningAssets(params)
			}
		}
	}, [session.user, stage.state.optionSelectedIncomOrigin])

	return (
		<Container>
			<PrimaryContent>
				<StyledPanel>
					<Panel title={message({ id: 'REVENUE_SUMMARY' })}>
							<Revenues>
								<ValueDecimalLabel
									value={session.revenueSummary?.today ?? 0}
									decimals={2}
									title="Today"
									sign="$"
									sise="large"
									loading={!session.revenueSummary}
								/>
								<ValueDecimalLabel
									value={session.revenueSummary?.thisWeek ?? 0}
									decimals={2}
									title="This week"
									sign="$"
									sise="large"
									loading={!session.revenueSummary}
								/>
								<ValueDecimalLabel
									value={session.revenueSummary?.thisMonth ?? 0}
									decimals={2}
									title="This month"
									sign="$"
									sise="large"
									loading={!session.revenueSummary}
								/>
								<ValueDecimalLabel
									value={session.revenueSummary?.thisYear ?? 0}
									decimals={2}
									title="This year"
									sign="$"
									sise="large"
									loading={!session.revenueSummary}
								/>
							</Revenues>
					</Panel>
				</StyledPanel>

				<StyledPanel>
					<Panel title={message({ id: 'REVENUE' })}>
						<ContainerSwitch>
							{session.revenueChart && (
								<Select
									design="simple"
									onSelect={onSelectTimeChart(stage)}
									options={options.map(option => ({
										...option,
										main: option.id === stage.state.optionSelectedRevenueChart?.id,
									}))}
								/>
							)}
							{!session.revenueChart && (
								<Skeleton>
									<Select
										design="simple"
										options={[{ id: 'id', value: 'value', main: true }]}
									/>
								</Skeleton>
							)}
						</ContainerSwitch>
						{session.revenueChart && <ChartCurve data={session.revenueChart.data} labels={session.revenueChart.labels} />}
						{!session.revenueChart && (
							<Skeleton
								sx={{
									maxWidth: 'inherit'
								}}
							>
								<ChartCurve data={[0]} labels={['skleton']} />
							</Skeleton>
						)}
					</Panel>
				</StyledPanel>
			</PrimaryContent>
			{session.incomeOrigin.data && session.assetsAndRoi && session.returningAssets && (
				<SecondaryContent>
					<StyledPanel>
						<Panel title="Income stats">
							<ContainerSwitch>
								<Select
									design="simple"
									onSelect={onSelectTimeOrigin(stage)}
									options={options.map(option => ({
										...option,
										main: option.id === stage.state.optionSelectedIncomOrigin?.id,
									}))}
								/>
							</ContainerSwitch>
							<StatsHead style={{ marginTop: 0 }}>Origin</StatsHead>
							{Object.keys(session.incomeOrigin.data).map((io) => (
								<StyledLoadLineLabel key={io}>
									<LoadLineLabel title={io} value={session.incomeOrigin.data?.[io] ?? 0} />
								</StyledLoadLineLabel>
							))}

							<StatsHead>Collateral assets</StatsHead>
					
							<ContainerValue>
								<ValueDecimal
									sameSize
									decimals={2}
									sign="$"
									sise="large"
									value={session.assetsAndRoi.collateral}
								/>
							</ContainerValue>
				
							<StatsHead>ROI</StatsHead>
							<ContainerValue>
								<ValueDecimal
									sameSize
									decimals={2}
									sign="%"
									signPosition="right"
									sise="large"
									value={session.assetsAndRoi.ROI}
								/>
							</ContainerValue>

							<StatsHead>Top returning assets</StatsHead>
							{session.returningAssets.map(returningAsset => (
								<ReturningAsset key={returningAsset.coin_id} {...returningAsset} />
							))}
							{session.returningAssets?.length === 0 && (
								<LoaderContainer>
									<span>Nothing to show.</span>
								</LoaderContainer>
							)}
						</Panel>
					</StyledPanel>
				</SecondaryContent>
			)}
			{(
				session.incomeOrigin.status === 'loading'
				|| !session.assetsAndRoi
				|| !session.returningAssets
			) && (
				<IncomeSecondaryContentSkeleton />
			)}
		</Container>
	)
}

export default Income
