// region import
import React, { useContext } from 'react'
import { Menu, IconButton } from '@mui/material'
import styled from 'styled-components'

// hooks
import { useStage } from 'hooks'

// interfaces
import { BackendUser } from 'interfaces'

// components
import { SVGIconNotifications, MenuOptionsUser } from 'components'

// contexts
import { Backend } from 'contexts'

// utilities
import { resources } from 'utilities'

// modules
import { initialState, openNotifications, closeNotifications } from './module'

// styles
import styles from './index.module.css'
// endregion

const ContainerNotifications = styled.div`
	font-family: 'Aileron';
`

const NotificationsTitle = styled.div`
	padding: ${props => `${props.theme.space.sm} ${props.theme.space.md}`};
	border-bottom: solid 1px ${props => props.theme.color.varietyMainTinyShadow};
`

const NotificationsContent = styled.div`
	padding: ${props => `${props.theme.space.sm} ${props.theme.space.md}`};
	display: flex;
	justify-content: center;
	align-items: center;

	flex-direction: column;
	max-width: 250px;
`

const NotificationsElements = styled.div`
	text-align: center;
	vertical-align: center;
	margin-bottom: ${props => props.theme.space.md};
`

function GroupUserMenu() {
	const stage = useStage(initialState)
	const notificationsOpen = Boolean(stage.state.notificationsAnchor);
	const { response } = useContext(Backend)
	const user: BackendUser | undefined = response({
		endpoint: resources.endpoints.get.user,
		method: 'get',
	})?.data
	const letter = user?.email.slice(0, 1).toUpperCase() ?? ''
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
