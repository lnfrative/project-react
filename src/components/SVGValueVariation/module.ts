// region import
import { RefObject } from 'react'

// utiltiies
import { resources } from 'utilities'
import { CanvasValueVariationProps } from 'interfaces'

// styles
import styles from './index.module.css'
// endregion

function drawPolyline(ref: RefObject<SVGPolylineElement>, props: CanvasValueVariationProps) {
	if (!ref.current) return
	const svgPolyline = ref.current

	const coords = [...props.coordsValueVariation]
	const prices = coords.map(coord => coord[1])
	const priceMin = Math.min(...prices)
	const priceMax = Math.max(...prices)
	const priceInterval = priceMax - priceMin
	const factor = 45 / priceInterval

	const points = prices.reduce((accum, price, index) => {
		const x = (125 / prices.length) * index
		const y = (priceMax - price) * factor
		if (accum) {
			return `${accum} ${x},${y}`
		}
		return `${x},${y}`
	}, '')

	svgPolyline.setAttribute('points', points)
	svgPolyline.setAttribute(
		'stroke',
		prices[0] < prices[prices.length - 1]
			? resources.colors.variety_upstream
			: resources.colors.variety_dowsntream
	)
}

function nestStyles() {
	return {
		container: styles.upstream,
	}
}

export { drawPolyline, nestStyles }
