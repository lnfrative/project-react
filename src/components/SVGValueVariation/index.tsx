// region import
import React, { useEffect, useRef } from 'react'

// utilities
import { CanvasValueVariationProps } from 'interfaces'

// modules
import { drawPolyline } from './module'
// endregion

function SVGValueVariation(props: CanvasValueVariationProps) {
	const refPoline = useRef<SVGPolylineElement>(null)

	useEffect(() => {
		drawPolyline(refPoline, props)
	}, [])

	return (
		<svg width={125} height={45} viewBox="0 0 125 45">
			<polyline ref={refPoline} fill="none" strokeWidth={1} />
		</svg>
	)
}

export default SVGValueVariation
