// region import
import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '@mui/material'

// hooks
import { useStage } from 'hooks'

// utilities
import { message, resources } from 'utilities'
import { MenuOptionsUserProps } from 'interfaces'

// components
import {
	// Menu,
	SVGIconSettings,
	// SVGIconCheck,
	// SVGIconBook,
	SVGIconLogout,
	Signout,
} from 'components'

// modules
import { initialState, handleClose, handleOpen } from './module'

// styles
import styles from './index.module.css'
// endregion

function MenuOptionsUser(props: MenuOptionsUserProps) {
	const stage = useStage(initialState)
	const open = Boolean(stage.state.anchor)
	return (
		<div>
			<div
				role="button"
				aria-controls="basic-menu"
				tabIndex={0}
				onClick={handleOpen(stage)}
				className={styles.container}
			>{props.character}</div>
			<Menu
				open={open}
				anchorEl={stage.state.anchor}
				MenuListProps={{
					"aria-labelledby": "basic-menu"
				}}
				onClose={handleClose(stage)}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

				PaperProps={{
					sx: {
						background: 'transparent',
					}
				}}
			>
				<div className={styles.menuContent}>
					<div className={styles.group}>
						<Link to={resources.routes.setting.base} className={styles.containerOption}>
							<SVGIconSettings />
							<span className={styles.label}>{message({ id: 'SETTINGS' })}</span>
						</Link>
					</div>
					<div className={styles.group}>
						<a rel="noreferrer" target="_blank" href="https://discord.dogec.io" className={styles.containerOption}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height={25}
							viewBox="0 0 24 24"
							width={22}
						>
							<path d="M0 0h24v24H0z" fill="none" />
							<path
								fill="#a39be9"
								d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
							/>
						</svg>
							<span className={styles.label}>{message({ id: 'SUPPORT' })}</span>
						</a>
					</div>
					<Signout>
						<div className={styles.containerOption}>
							<SVGIconLogout />
							<span className={styles.label}>{message({ id: 'SIGN_OUT' })}</span>
						</div>
					</Signout>
				</div>
			</Menu>
		</div>
	)
}

export default MenuOptionsUser
