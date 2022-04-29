import React from 'react'
import { Box, Skeleton } from '@mui/material'
import styled from 'styled-components'
import styles from './index.module.css'

export const MovementGroupData = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
  color: ${props => props.theme.color.varietyMainShadow};
  flex-direction: column;

  ${props => props.theme.mediaQuery.sm} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`

export const MovementGroupDataBelow = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	color: ${props => props.theme.color.varietyMainShadow};
  margin-top: ${props => props.theme.space.xs};

  flex-direction: column-reverse;

  ${props => props.theme.mediaQuery.sm} {
    flex-direction: row;
  }
`

export const Data = styled.div`
  margin-left: auto;
  margin-bottom: ${props => props.theme.space.xs};

  ${props => props.theme.mediaQuery.sm} {
    margin-left: 0;
  }
`

function SkeletonIcon() {
	return (
		<Skeleton
			variant="circular"
		>		
			<div className={styles.movementImg} />
		</Skeleton>
	)
}

function SkeletonConcept() {
	return (
		<Skeleton>
			<div className={styles.price}>
				Deposit (Completed)
			</div>
		</Skeleton>
	)
}

function SkeletonPrice() {
	return (
		<Skeleton>	
			<div className={styles.movementPriceUp}>
				415.31 USD
			</div>
		</Skeleton>
	)
}

function SkeletonDate() {
	return (
		<Skeleton>
			<div className={styles.secondRow}>Thu Apr 28 2022 03:39:06</div>
		</Skeleton>
	)
}

function SkeletonAmount() {
	return (
		<Skeleton>
			<div className={styles.secondRow}>
				10000 DOGEC
			</div>
		</Skeleton>
	)
}

export function TransactionSkeleton() {
	return (
		<div className={styles.movement}>
			<Box
				sx={{
					marginRight: 2,
				}}
			>
				<SkeletonIcon />
			</Box>
			<div className={styles.movementData}>
				<div className={styles.movementGroupData}>
					<MovementGroupData>
						<SkeletonConcept />
						<SkeletonPrice />
					</MovementGroupData>
				</div>
				<MovementGroupDataBelow>
					<SkeletonDate />
					<SkeletonAmount />
				</MovementGroupDataBelow>
			</div>
		</div>
	)
}