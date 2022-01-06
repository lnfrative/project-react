// region import
import React, { PropsWithChildren, useContext, useEffect } from 'react'
import { Snackbar, Alert, Grow } from '@mui/material'

// hooks
import { useStage } from '@/hooks'

// utilities
import { resources } from '@/utilities'
import { Responser } from '@/utilities/Types'

// contexts
import { Backend } from '@/contexts'

// modules
import { initialState, closeSnackbar } from './module'
// endregion

const { colors } = resources

function HandleBackendErrors(props: PropsWithChildren<{}>) {
  const stage = useStage(initialState)
  const { loading, response } = useContext(Backend)

  useEffect(() => {
    if (loading) {
      stage.commitState({ requestId: loading.id, method: loading.method })
    } else {
      const { state, commitState } = stage
      if (state.method && state.requestId) {
        const responser: Responser = response[state.method.toLowerCase()]
        const backendResponse = responser({ id: state.requestId })
        if (backendResponse?.error) {
          commitState({ error: backendResponse.error, snackbar: 'open' })
        }
      }
    }
  }, [loading])

  return (
    <>
      <Snackbar
        open={stage.state.snackbar === 'open'}
        autoHideDuration={4000}
        onClose={closeSnackbar(stage)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={Grow}
      >
        <Alert style={{ background: colors.passive_pager, color: colors.variety_main }} severity="error">{stage.state.error}</Alert>
      </Snackbar>
      {props.children}
    </>
  )
}

export default HandleBackendErrors
