// region import
import React, { useContext, useEffect } from 'react'
import { DateRange } from 'react-date-range'
import { CircularProgress } from '@mui/material'

// hooks
import { useStage } from 'hooks'

// interfaces
import { BackendTransaction } from 'interfaces'

// contexts
import { Backend } from 'contexts'

// components
import { Panel, Transaction, Checkbox } from 'components'

// utilities
import { resources, message } from 'utilities'

// modules
import { initialState, handleRanges, updateTypes } from './module'

// styles
import {
  Container,
  PrimaryContent,
  SecondaryContent,
  StyledPanel,
  ContainerTransaction,
  ContainerFeedback,
  ContainerCheckbox,
  StyledCheckbox,
  StatsHead,
} from './style'
// endregion

function Transactions() {
  const stage = useStage(initialState)
  const backend = useContext(Backend)

  const range = [
    new Date(stage.state.range.startDate).getTime(),
    new Date(stage.state.range.endDate).getTime(),
  ]

  const params = {
    types: stage.state.types.join(','),
    ...(range[0] === range[1] ? {} : {
      range: range.join(',')
    })
  }

  const transactions: BackendTransaction[] | undefined = backend.response({
    endpoint: resources.endpoints.get.transactions,
    method: 'get',
    params,
  })?.data

  useEffect(() => {
    backend.request({
      endpoint: resources.endpoints.get.transactions,
      method: 'get',
      params,
    })
  }, [stage.state.range, stage.state.types])

  return (
    <Container>
      <PrimaryContent>
        <StyledPanel>
          <Panel title="Transactions">
            {transactions && transactions.map((transaction, index) => (
              <ContainerTransaction
                key={transaction.id}
              >
                <Transaction data={transaction} />
              </ContainerTransaction>
            ))}
            {!transactions && (
              <ContainerFeedback>
                <CircularProgress color="inherit" />
              </ContainerFeedback>
            )}
            {transactions?.length === 0 && (
              <ContainerFeedback>
                {message({ id: 'EMPTY_TRANSACTIONS_HISTORY' })}
              </ContainerFeedback>
            )}
          </Panel>
        </StyledPanel>
      </PrimaryContent>
      <SecondaryContent>
        <StyledPanel>
          <Panel title="Filters">
            <StatsHead style={{ marginTop: 0 }}>Origin</StatsHead>
            <ContainerCheckbox>
              <StyledCheckbox>
                <Checkbox
                  checked={stage.state.types.includes(1)}
                  checkCallback={updateTypes(stage, 1)}
                  design="standard"
                />
              </StyledCheckbox>
              <div>Deposits</div>
            </ContainerCheckbox>
            <ContainerCheckbox>
              <StyledCheckbox>
                <Checkbox
                  checked={stage.state.types.includes(4)}
                  checkCallback={updateTypes(stage, 4)}
                  design="standard"
                />
              </StyledCheckbox>
              <div>Withdrawals</div>
            </ContainerCheckbox>
            <ContainerCheckbox>
              <StyledCheckbox>
                <Checkbox
                  checked={stage.state.types.includes(2)}
                  checkCallback={updateTypes(stage, 2)}
                  design="standard"
                />
              </StyledCheckbox>
              <div>Staking rewards</div>
            </ContainerCheckbox>
            <ContainerCheckbox>
              <StyledCheckbox>
                <Checkbox
                  checked={stage.state.types.includes(5)}
                  checkCallback={updateTypes(stage, 5)}
                  design="standard"
                />
              </StyledCheckbox>
              <div>Masternodes rewards</div>
            </ContainerCheckbox>
            <StatsHead>Date range</StatsHead>
            <DateRange
              ranges={[stage.state.range]}
              showDateDisplay={false}
              onChange={handleRanges(stage)}
            />
          </Panel>
        </StyledPanel>
      </SecondaryContent>
    </Container>
  )
}

export default Transactions