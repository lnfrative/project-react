// region import
import React from 'react'

// components
import { Panel, ChartCurve, ValueDecimalLabel } from 'components'

// utilities
import { message } from 'utilities'

// styles
import { Container, StyledPanel, Revenues, PrimaryContent, SecondaryContent } from './style'
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
					<Panel title="Income stats">test</Panel>
				</StyledPanel>
			</SecondaryContent>
		</Container>
	)
}

export default Income
