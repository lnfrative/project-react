// region import
import React, { useEffect, useRef } from 'react'

// utilities
import { CanvasValueVariationProps } from '@/utilities/Interfaces'

// modules
import { drawCanvasCurve, nestStyles } from './module'
// endregion

function CanvasValueVariation(props: CanvasValueVariationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const styles = nestStyles()

  useEffect(() => {
    drawCanvasCurve(canvasRef, props.coordsValueVariation)
  }, [])

  return (
    <canvas className={styles.container} width={125} height={40} ref={canvasRef} />
  )
}

export default CanvasValueVariation
