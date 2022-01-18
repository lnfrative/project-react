// region import
import React, { PropsWithChildren, useEffect } from 'react'

// hooks
import { useStage } from 'hooks'

// contexts
import { Backend } from 'contexts'

// modules
import { genRequest, genResponse, initialState, loader } from './module'
// endregion

function ProvideContextBackend(props: PropsWithChildren<{}>) {
	const stage = useStage(initialState)
	const request = genRequest(stage)
	const response = genResponse(stage)

	useEffect(() => {
		const { loading } = stage.state
		if (loading) {
			loader(stage)
		}
	}, [stage.state.loading])

	useEffect(() => {
		const { queueCallbacks, loading } = stage.state
		if (queueCallbacks?.length && !loading) {
			const queueCallback = queueCallbacks[0]
			stage.commitState({
				loading: queueCallback,
			})
		}
	}, [stage.state, stage.state.loading])

	return (
		<Backend.Provider value={{ request, response, loading: stage.state.loading }}>
			{props.children}
		</Backend.Provider>
	)
}

export default ProvideContextBackend
