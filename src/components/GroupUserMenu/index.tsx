// region import
import React from 'react'
import { Menu, IconButton } from '@mui/material'


// hooks
import { useStage, useSessionStore } from 'hooks'

// components
import { SVGIconNotifications, MenuOptionsUser } from 'components'

// modules
import { initialState, openNotifications, closeNotifications } from './module'

// styles
import styles from './index.module.css'
import { ContainerNotifications, NotificationsContent, NotificationsElements, NotificationsTitle } from './style'
// endregion

function GroupUserMenu() {
	const session = useSessionStore()
	const stage = useStage(initialState)
	const notificationsOpen = Boolean(stage.state.notificationsAnchor);
	const letter = session.user.data?.email.slice(0, 1).toUpperCase() ?? ''
	return (
		<div className={styles.container}>
			<IconButton onClick={openNotifications(stage)} id="notifications" aria-controls="basic-menu" className={styles.notifications}>
				<SVGIconNotifications />
			</IconButton>
			<Menu
				id="notifications"
				anchorEl={stage.state.notificationsAnchor}
				MenuListProps={{
					"aria-labelledby": "basic-menu"
				}}
				open={notificationsOpen}
				onClose={closeNotifications(stage)}

				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<ContainerNotifications>
					<NotificationsTitle>Notifications</NotificationsTitle>
					<NotificationsContent>
						<NotificationsElements>
							<SVGIconNotifications />
						</NotificationsElements>
						<NotificationsElements>Hang tight!</NotificationsElements>
						<NotificationsElements style={{ margin: 0 }}>Notifications will start showing up soon.</NotificationsElements>
					</NotificationsContent>
				</ContainerNotifications>
			</Menu>
			<div className={styles.menu}>
				<MenuOptionsUser character={letter} />
			</div>
		</div>
	)
}

export default GroupUserMenu
