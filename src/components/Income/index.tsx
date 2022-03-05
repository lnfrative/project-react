// region import
import React, { useContext, useEffect } from 'react'
import { CircularProgress } from '@mui/material'

// hooks
import { useStage } from 'hooks'

// contexts
import { Backend, Currency } from 'contexts'

// interfaces
import {
	BackendRevenueSummary,
	BackendRevenueChart,
	BackendIncomeOrigin,
	BackendCollateralAssetsAndROI,
	BackendReturningAsset,
} from 'interfaces'

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
	ContainerSwitch,
} from './style'

// modules
import { initialState, options, onSelectTimeChart, onSelectTimeOrigin } from './module'
// endregion

function Income() {
	const stage = useStage(initialState)
	const backend = useContext(Backend)
	const currency = useContext(Currency)

	const revenueSummaryParams = {
		currency: currency.state.id,
		period: 'year',
	}

	const revenueChartParams = {
		currency: currency.state.id,
		period: stage.state.optionSelectedRevenueChart?.id,
	}

	const incomeOriginParams = {
		currency: currency.state.id,
		period: stage.state.optionSelectedIncomOrigin?.id,
	}

	const returningAssets: Array<BackendReturningAsset> | undefined = backend.response({
		method: 'get',
		endpoint: resources.endpoints.get.returningAssets,
		params: incomeOriginParams,
	})?.data

	const collateralAssetsAndROI: BackendCollateralAssetsAndROI | undefined = backend.response({
		method: 'get',
		endpoint: resources.endpoints.get.collateralAssetsAndROI,
		params: incomeOriginParams,
	})?.data

	const incomeOrigin: BackendIncomeOrigin | undefined = backend.response({
		method: 'get',
		endpoint: resources.endpoints.get.incomeOrigin,
		params: incomeOriginParams,
	})?.data

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

		backend.request({
			endpoint: resources.endpoints.get.incomeOrigin,
			method: 'get',
			params: incomeOriginParams,
		})

		backend.request({
			endpoint: resources.endpoints.get.collateralAssetsAndROI,
			method: 'get',
			params: incomeOriginParams,
		})

		backend.request({
			endpoint: resources.endpoints.get.returningAssets,
			method: 'get',
			params: incomeOriginParams,
		})
	}, [revenueSummaryParams, incomeOriginParams, revenueChartParams])

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
						<ContainerSwitch>
							<Select
								design="simple"
								onSelect={onSelectTimeChart(stage)}
								options={options.map(option => ({
									...option,
									main: option.id === stage.state.optionSelectedRevenueChart?.id,
								}))}
							/>
						</ContainerSwitch>
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
						{incomeOrigin &&
							Object.keys(incomeOrigin).map(io => (
								<StyledLoadLineLabel key={io}>
									<LoadLineLabel title={io} value={incomeOrigin[io]} />
								</StyledLoadLineLabel>
							))}
						{!incomeOrigin && (
							<LoaderContainer>
								<CircularProgress color="info" />
							</LoaderContainer>
						)}

						<StatsHead>Collateral assets</StatsHead>
						{collateralAssetsAndROI && (
							<ContainerValue>
								<ValueDecimal
									sameSize
									decimals={2}
									sign="$"
									sise="large"
									value={collateralAssetsAndROI.collateral}
								/>
							</ContainerValue>
						)}
						{!collateralAssetsAndROI && (
							<LoaderContainer>
								<CircularProgress color="info" />
							</LoaderContainer>
						)}

						<StatsHead>ROI</StatsHead>
						{collateralAssetsAndROI && (
							<ContainerValue>
								<ValueDecimal
									decimals={0}
									sign="%"
									signPosition="right"
									sise="large"
									value={collateralAssetsAndROI.ROI}
								/>
							</ContainerValue>
						)}
						{!collateralAssetsAndROI && (
							<LoaderContainer>
								<CircularProgress color="info" />
							</LoaderContainer>
						)}

						<StatsHead>Top returning assets</StatsHead>
						{returningAssets &&
							returningAssets.map(returningAsset => (
								<ReturningAsset key={returningAsset.coin_id} {...returningAsset} />
							))}
						{returningAssets?.length === 0 && (
							<LoaderContainer>
								<span>Nothing to show.</span>
							</LoaderContainer>
						)}
						{!returningAssets && (
							<LoaderContainer>
								<CircularProgress color="info" />
							</LoaderContainer>
						)}
					</Panel>
				</StyledPanel>
			</SecondaryContent>
		</Container>
	)
}

export default Income
