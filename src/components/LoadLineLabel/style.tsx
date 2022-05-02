import React from 'react'
import { Skeleton } from '@mui/material'
import styled from 'styled-components'
import { LoadLine } from 'components'

export const Container = styled('div')`
	width: 100%;
`

export const Labels = styled('div')`
	display: flex;
	justify-content: space-between;
	letter-spacing: 3.29px;
	color: ${props => props.theme.color.varietyMainShadow};

	${props =>
		`
        color: ${props.theme.color.varietyMainShadow};
        margin-bottom: ${props.theme.space.sm};
      `}
`

export function LoadLineLabelSkeleton() {
	return (
		<Container>
			<Labels>
				<Skeleton>
					<span>Skeleton title</span>
				</Skeleton>
				<Skeleton>
					<span>0 %</span>
				</Skeleton>
			</Labels>
			<Skeleton
				sx={{
					maxWidth: 'inherit'
				}}
			>
				<LoadLine value={100} />
			</Skeleton>
		</Container>
	)
}