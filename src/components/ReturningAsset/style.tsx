import React from 'react'
import { Skeleton } from '@mui/material'
import styled from 'styled-components'
import { ImgCoin, ValueDecimal } from 'components'

export const Container = styled('div')`
	display: flex;
	justify-content: space-between;
	max-width: 310px;
`

export const Group = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const PrimaryTitle = styled('div')`
	${props =>
		`
        color: ${props.theme.color.varietyMain};
        font-size: ${props.theme.size.xxs};
        margin-bottom: ${props.theme.space.xxxs};
      `}
`

export const SecondaryTitle = styled('div')`
	${props =>
		`
        color: ${props.theme.color.varietyMainShadow};
        font-size: ${props.theme.size.xxxs};
      `}
`

export function ReturningAssetSkeleton() {
	return (
		<Container>
      <Skeleton
        variant="circular"
      >
        <ImgCoin
          size="medium"
          src=""
        />
      </Skeleton>
			<Group>
        <Skeleton>
				< PrimaryTitle>skeleton</PrimaryTitle>
        </Skeleton>

        <Skeleton>
				  <SecondaryTitle>skeleton</SecondaryTitle>
        </Skeleton>
			</Group>
			<Group>
				<PrimaryTitle>
          <Skeleton>
					  <ValueDecimal sameSize decimals={2} sign="$" value={0} sise="small" />
          </Skeleton>
				</PrimaryTitle>
        <Skeleton>
				  <SecondaryTitle>skeleton</SecondaryTitle>
        </Skeleton>
			</Group>
			<Group>
				<PrimaryTitle>
          <Skeleton>
            <ValueDecimal
              sameSize
              decimals={2}
              sign="%"
              signPosition="right"
              value={0}
              sise="small"
            />
          </Skeleton>
				</PrimaryTitle>
        <Skeleton>
				  <SecondaryTitle>skeleton</SecondaryTitle>
        </Skeleton>
			</Group>
		</Container>
	)
}