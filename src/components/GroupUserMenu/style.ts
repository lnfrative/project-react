// region import
import styled from 'styled-components'
// endregion

export const ContainerNotifications = styled.div`
	font-family: 'Aileron';
`

export const NotificationsTitle = styled.div`
	padding: ${props => `${props.theme.space.sm} ${props.theme.space.md}`};
	border-bottom: solid 1px ${props => props.theme.color.varietyMainTinyShadow};
`

export const NotificationsContent = styled.div`
	padding: ${props => `${props.theme.space.sm} ${props.theme.space.md}`};
	display: flex;
	justify-content: center;
	align-items: center;

	flex-direction: column;
	max-width: 250px;
`

export const NotificationsElements = styled.div`
	text-align: center;
	vertical-align: center;
	margin-bottom: ${props => props.theme.space.md};
`