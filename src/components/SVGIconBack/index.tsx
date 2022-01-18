// region import
import React from 'react'

// styles
import styles from './index.module.css'
// endregion

function SVGIconBack() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="33.427" height="25.012">
			<defs>
				<linearGradient
					id={styles.gradient}
					x1="12.689"
					x2="21.717"
					y1="25.624"
					y2="1.536"
					gradientUnits="userSpaceOnUse"
				>
					<stop className={styles.primaryStop} />
					<stop className={styles.secondaryStop} />
				</linearGradient>
			</defs>
			<path
				className={styles.design}
				stroke={`url(#${styles.gradient})`}
				d="M15.973 20.308 4.705 12.506l11.268-7.801v5.46h12.75v4.508h-12.75v5.635z"
			/>
		</svg>
	)
}

export default SVGIconBack
