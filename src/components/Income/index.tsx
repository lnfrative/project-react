// region import
import React from 'react'

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
} from './style'
// endregion

const weight = [600.0, 605.2, 610, 615.4, 610.9, 610.2, 610.8, 620.6, 626.6, 610.2, 612, 620]

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function Income() {
	return (
		<Container>
			<PrimaryContent>
				<StyledPanel>
					<Panel title={message({ id: 'REVENUE_SUMMARY' })}>
						<Revenues>
							<ValueDecimalLabel value={0} decimals={2} title="Today" sign="$" sise="large" />
							<ValueDecimalLabel value={0} decimals={2} title="This week" sign="$" sise="large" />
							<ValueDecimalLabel value={0} decimals={2} title="This month" sign="$" sise="large" />
							<ValueDecimalLabel value={0} decimals={2} title="This year" sign="$" sise="large" />
						</Revenues>
					</Panel>
				</StyledPanel>

				<StyledPanel>
					<Panel title={message({ id: 'REVENUE_PER_MONTH' })}>
						<ChartCurve data={weight} labels={labels} />
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
