import styled from 'styled-components'

export const Container = styled.div`
	padding: var(--space-xl) var(--space-md);
  background-color: var(--color-passive-main);

	display: flex;
	align-items: center;
	justify-content: center;

	flex-direction: column;
	max-width: 400px;

	border-radius: 5px;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;

  ${props => props.theme.mediaQuery.sm} {
    position: inherit;
    padding: var(--space-xxl) var(--space-xl);
  }
`

export const Title = styled.div`
  text-align: center;
	font-size: var(--font-size-lg);
	color: var(--color-variety-main);

	margin: var(--space-lg) 0;
`

export const ContainerMessage = styled.div`
	background-color: var(--color-variety-main);
	padding: var(--space-md) var(--space-lg);
	color: var(--color-passive-pager);

	display: flex;
	align-items: center;
	justify-content: center;

	text-align: center;
	border-radius: 5px;
`

export const ContentAfterMessage = styled.div`
	margin-top: var(--space-lg);
	width: 100%;
`

export const Content = styled.div`
	margin-bottom: var(--space-lg);
`

export const Close = styled.div`
  height: 48px;
  width: 48px;
  position: absolute;
  right: ${props => props.theme.space.md};
  top:  ${props => props.theme.space.md};

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px ${props => props.theme.color.varietyMainTinyShadow};
  border-radius: 5px;

  ${props => props.theme.mediaQuery.sm} {
    display: none;
  }
`