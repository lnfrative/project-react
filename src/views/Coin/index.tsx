// region import
import React, { useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'

// contexts
import { Backend } from 'contexts'

// components
import {
	HeaderSegmentation,
	GroupCoinPreview,
	GroupCoinValues,
	PaginationBar,
	CoinPaginationOverview,
	Middleware,
} from 'components'

// utilities
import { PaginationObject, BackendCoin } from 'interfaces'
import { resources } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

const paginationObjects: Array<PaginationObject> = [
	{
		id: 'overview',
		title: 'Overview',
		main: true,
		content: <CoinPaginationOverview />,
	},
	// { id: 'giftcard_and_utilities', title: 'Giftcard & utilities', content: <div>Giftcard</div> },
	// { id: 'movement_history', title: 'Movement history', content: <div>Movement</div> },
	// { id: 'about', title: 'About', content: <div>About</div> },
]

const routeCoin = resources.routes.coin.aliases.name

function Coin() {
	const { response } = useContext(Backend)
	const match = useRouteMatch<{ name: string }>()
	const coins: Array<BackendCoin> = response({
		endpoint: resources.endpoints.get.coins,
		method: 'get',
	})?.data
	const coin = resources.utils.filterCoin(coins, { name: match.params.name })

	// TODO: return a 404 error page instead null
	if (!coin) return null
	return (
		<Middleware requirements={resources.routes.coin.middlewares}>
			<HeaderSegmentation
				primaryContent={
					<div className={styles.primaryContent}>
						<GroupCoinPreview
							nameCoin={coin.name}
							idCoin={coin.asset}
							srcImgCoin={resources.coin[resources.utils.normaliceCoinName(coin.name)].logo}
						/>
					</div>
				}
				secondaryContent={
					<div className={styles.secondaryContent}>
						<GroupCoinValues />
						<PaginationBar
							pathnameBase={routeCoin.path.replace(
								routeCoin.alias.name,
								resources.utils.normaliceCoinName(coin.name)
							)}
							pathParamId={resources.utils.normaliceCoinName(coin.name)}
							paginationObjects={paginationObjects}
						/>
					</div>
				}
			/>
		</Middleware>
	)
}

export default Coin
