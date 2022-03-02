// region import
import React, { useContext, useEffect } from 'react'
import { CircularProgress } from '@mui/material'

// contexts
import { Backend, Currency } from 'contexts'

// interfaces
import { BackendRevenueSummary, BackendRevenueChart } from 'interfaces'

// components
import {
	Panel,
	ChartCurve,
	ValueDecimalLabel,
	LoadLineLabel,
	ValueDecimal,
	ReturningAsset,
} from 'components'

// utilities
import { message, resources } from 'utilities'

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
} from './style'
// endregion

function Income() {
	const backend = useContext(Backend)
	const currency = useContext(Currency)

	const revenueSummaryParams = {
		currency: currency.state.id,
		year: '2022',
	}

	const revenueChartParams = {
		currency: currency.state.id,
		year: '2022',
	}

	const revenueSummary: BackendRevenueSummary | undefined = backend.response({
		method: 'get',
		endpoint: resources.endpoints.get.revenueSummary,
		params: revenueSummaryParams,
	})?.data

	const revenueChart: BackendRevenueChart | undefined = backend.response({
		method: 'get',
		endpoint: resources.endpoints.get.revenueChart,
		params: revenueChartParams,
	})?.data

	useEffect(() => {
		backend.request({
			endpoint: resources.endpoints.get.revenueSummary,
			method: 'get',
			params: revenueSummaryParams,
		})

		backend.request({
			endpoint: resources.endpoints.get.revenueChart,
			method: 'get',
			params: revenueChartParams,
		})
	}, [])

	return (
		<Container>
			<PrimaryContent>
				<StyledPanel>
					<Panel title={message({ id: 'REVENUE_SUMMARY' })}>
						{revenueSummary && (
							<Revenues>
								<ValueDecimalLabel
									value={revenueSummary.today}
									decimals={2}
									title="Today"
									sign="$"
									sise="large"
								/>
								<ValueDecimalLabel
									value={revenueSummary.thisWeek}
									decimals={2}
									title="This week"
									sign="$"
									sise="large"
								/>
								<ValueDecimalLabel
									value={revenueSummary.thisMonth}
									decimals={2}
									title="This month"
									sign="$"
									sise="large"
								/>
								<ValueDecimalLabel
									value={revenueSummary.thisYear}
									decimals={2}
									title="This year"
									sign="$"
									sise="large"
								/>
							</Revenues>
						)}
						{!revenueSummary && (
							<LoaderContainer>
								<CircularProgress color="info" />
							</LoaderContainer>
						)}
					</Panel>
				</StyledPanel>

				<StyledPanel>
					<Panel title={message({ id: 'REVENUE_PER_MONTH' })}>
						{revenueChart && <ChartCurve data={revenueChart.data} labels={revenueChart.months} />}
						{!revenueChart && (
							<LoaderContainer>
								<CircularProgress color="info" />
							</LoaderContainer>
						)}
					</Panel>
				</StyledPanel>
			</PrimaryContent>
			<SecondaryContent>
				<StyledPanel>
					<Panel title="Income stats">
						<StatsHead>Origin</StatsHead>
						<StyledLoadLineLabel>
							<LoadLineLabel title="PoS/MN Pool" value={50} />
						</StyledLoadLineLabel>
						<StyledLoadLineLabel>
							<LoadLineLabel title="Interest" value={25} />
						</StyledLoadLineLabel>
						<StyledLoadLineLabel>
							<LoadLineLabel title="Mining" value={12.5} />
						</StyledLoadLineLabel>
						<StyledLoadLineLabel>
							<LoadLineLabel title="Referrals" value={12.5} />
						</StyledLoadLineLabel>

						<StatsHead>Collateral assets</StatsHead>
						<ContainerValue>
							<ValueDecimal decimals={2} sign="$" sise="large" value={541.64} />
						</ContainerValue>

						<StatsHead>ROI</StatsHead>
						<ContainerValue>
							<ValueDecimal decimals={0} sign="%" signPosition="right" sise="large" value={246} />
						</ContainerValue>

						<StatsHead>Top returning assets</StatsHead>
						<ReturningAsset />
					</Panel>
				</StyledPanel>
			</SecondaryContent>
		</Container>
	)
}

export default Income
