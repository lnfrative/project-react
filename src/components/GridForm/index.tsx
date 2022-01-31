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
				<div className={styles.lateralSideChild}>
					<div className={styles.gradientLeft} />
				</div>
				<div className={styles.verticalTopChild}>
					<div className={styles.lineBottom} />
					<div className={styles.verticalChilds}>
						<div className={styles.gradientTop} />
					</div>
					<div className={styles.verticalChildTopRight}>
						<div className={styles.gradientTop} />
					</div>
				</div>
				<div className={styles.lateralSideChild}>
					<div className={styles.gradientRight} />
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.horizontalLeftChild}>
					<div className={styles.gradientLeft} />
				</div>
				<div className={styles.mainChild}>
					<div className={styles.lineBottom} />
					<div className={styles.containerLogo}>
						<div className={styles.lineHorizontal} />
						<img
							alt={externalResources.dogeCashLogo.alt}
							src={externalResources.dogeCashLogo.src}
						/>
					</div>
					<div className={styles.containerForm}>
						<div className={styles.lineHorizontal} />
						{props.children}
					</div>
				</div>
				<div className={styles.horizontalRightChild}>
					<div className={styles.gradientRight} />
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.lateralSideChild} />
				<div className={styles.verticalBottomChild}>
					<div className={styles.verticalChilds}>
						<div className={styles.gradientBottom} />
					</div>
					<div className={styles.verticalChildBottomRight}>
						<div className={styles.gradientBottom} />
					</div>
				</div>
				<div className={styles.lateralSideChild} />
			</div>
		</div>
	)
}

export default GridForm
