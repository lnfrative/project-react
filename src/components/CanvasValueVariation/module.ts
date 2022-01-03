// region import
import { RefObject } from 'react';

// utiltiies
import { resources } from '@/utilities'
import { CoordValueVariation } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function drawCanvasCurve(ref: RefObject<HTMLCanvasElement>, coords: Array<CoordValueVariation>) {
  const context = ref.current?.getContext('2d')
  if (!context) return

  context.beginPath()
  context.moveTo(0, 40)

  coords.forEach((coord) => {
    context.lineTo(coord.timestamp, coord.value)
  })

  context.strokeStyle = resources.colors.variety_upstream
  context.stroke()
}

function nestStyles() {
  return {
    container: styles.upstream,
  }
}

export {
  drawCanvasCurve,
  nestStyles,
}
