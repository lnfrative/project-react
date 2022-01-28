// region import
import React from 'react'

// components
import { Header, GroupBrand, GroupUserMenu, LinkBackDashboard } from 'components'

// utilities
import { HeaderSegmentationProps } from 'interfaces'

// modules
import { nestStyles } from './module'
// endregion

function HeaderSegmentation(props: HeaderSegmentationProps) {
	const styles = nestStyles()
	return (
		<Header
			contentHeader={
				<div className={styles.grid}>
					<div className={styles.groupNav}>
						<GroupBrand />
					</div>
					<div className={styles.groupNavDetails}>
						<GroupUserMenu />
					</div>
				</div>
			}
		>
			<div className={styles.grid}>
				<LinkBackDashboard />
			</div>
			<div className={styles.grid}>
				{props.primaryContent}
				{props.secondaryContent}
			</div>
		</Header>
	)
}

export default HeaderSegmentation
