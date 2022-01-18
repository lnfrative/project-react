// region import
import React from 'react'

// utilities
import { externalResources } from 'utilities'

// nesters
import { nestStyles } from './module'
// endregion

function GridForm(props: { children: JSX.Element }) {
	const styles = nestStyles()
	return (
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.lateralSideChild} />
				<div className={styles.verticalTopChild}>
					<div className={styles.verticalChilds} />
					<div className={styles.verticalChildTopRight} />
				</div>
				<div className={styles.lateralSideChild} />
			</div>
			<div className={styles.row}>
				<div className={styles.horizontalLeftChild} />
				<div className={styles.mainChild}>
					<div className={styles.containerLogo}>
						<img
							alt={externalResources.dogeCashLogo.alt}
							src={externalResources.dogeCashLogo.src}
						/>
					</div>
					<div className={styles.containerForm}>{props.children}</div>
				</div>
				<div className={styles.horizontalRightChild} />
			</div>
			<div className={styles.row}>
				<div className={styles.lateralSideChild} />
				<div className={styles.verticalBottomChild}>
					<div className={styles.verticalChilds} />
					<div className={styles.verticalChildBottomRight} />
				</div>
				<div className={styles.lateralSideChild} />
			</div>
		</div>
	)
}

export default GridForm
