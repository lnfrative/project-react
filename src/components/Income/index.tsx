// region import
import React from 'react'

// components
import { Panel, ChartCurve, ValueDecimalLabel, LoadLineLabel, ValueDecimal } from 'components'

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

const weight = [600.0, 600.2, 610, 601.4, 509.9, 600.2, 509.8, 508.6, 509.6, 509.2, 602, 600]

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
							<ValueDecimal decimals={2} sign="$" sise="large" value={12521.64} />
						</ContainerValue>

						<StatsHead>ROI</StatsHead>
						<ContainerValue>
							<ValueDecimal decimals={0} sign="%" signPosition="right" sise="large" value={246} />
						</ContainerValue>
					</Panel>
				</StyledPanel>
			</SecondaryContent>
		</Container>
	)
}

export default Income
