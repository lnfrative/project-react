// region import
import React, { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
// endregion

Chart.register(...registerables)

const colors = {
	purple: {
		default: 'rgba(208,203,230,0.5)',
		half: 'rgba(109,112,225,0.55)',
		quarter: 'rgba(109,112,225,0.55)',
		zero: 'rgba(59,61,191,0.01)',
	},
	indigo: {
		default: 'rgba(208,203,230,0.5)',
		quarter: 'transparent',
	},
}

interface ChartCurveProps {
	data: number[]
	labels: string[]
}

function ChartCurve(props: ChartCurveProps) {
	const refContainer = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		let chart: Chart
		if (refContainer.current) {
			const context = refContainer.current.getContext('2d')

			if (context) {
				context.canvas.height = 100

				const gradient = context.createLinearGradient(0, 50, 0, 300)
				gradient.addColorStop(0, colors.purple.half)
				gradient.addColorStop(0, colors.purple.quarter)
				gradient.addColorStop(1, colors.purple.zero)

				chart = new Chart(context, {
					type: 'line',
					data: {
						labels: props.labels,
						datasets: [
							{
								fill: true,
								backgroundColor: gradient,
								pointBackgroundColor: colors.purple.default,
								borderColor: colors.purple.default,
								data: props.data,
								borderWidth: 2,
								pointRadius: 3,
								tension: 0.3,
							},
						],
					},
					options: {
						plugins: {
							legend: {
								display: false,
							},
						},
					},
				})
			}
		}
		return () => chart?.destroy()
	}, [])

	return <canvas aria-label="chart-curve" ref={refContainer} />
}

export default ChartCurve
