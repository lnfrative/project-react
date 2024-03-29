// region import
import React from 'react'

// utilities
import { HeaderProps } from 'interfaces'

// components
import { Banners, SVGLogo } from 'components'

// utilities
import { resources } from 'utilities'

// styles
import styles from './index.module.css'
import { ContentHeader, Page, Logo } from './style'
// endregion

function Header(props: HeaderProps) {
	return (
		<>
			<Banners />
			<div className={styles.container}>
				<div className={styles.header}>
				<Logo to={resources.routes.home.base}>
					<SVGLogo />
				</Logo>
					<ContentHeader>
						{props.contentHeader}
					</ContentHeader>
				</div>
				<Page>
					<div className={styles.contentPage}>{props.children}</div>
				</Page>
			</div>
		</>
	)
}

export default Header
