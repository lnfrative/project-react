// region import
import React, { PropsWithChildren } from 'react'

// hooks
import { useStage } from 'hooks'

// utilities
import { ContextCoinState } from 'interfaces'

// contexts
import { Coin } from 'contexts'
// endregion

const initialState: ContextCoinState = {
	name: undefined,
	id: undefined,
	logo: undefined,
}

function ProvideContextCoin(props: PropsWithChildren<{}>) {
	const stage = useStage<ContextCoinState>(initialState)

	return <Coin.Provider value={stage}>{props.children}</Coin.Provider>
}

export default ProvideContextCoin
