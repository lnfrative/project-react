// region import
import React, { useContext, useEffect } from 'react'
import { DateRange } from 'react-date-range'
import { CircularProgress } from '@mui/material'

// hooks
import { useStage } from 'hooks'

// interfaces
import { BackendTransaction, BackendCoin } from 'interfaces'

// contexts
import { Backend } from 'contexts'

// components
import { Panel, Transaction, Checkbox, Select, ImgCoin } from 'components'

// utilities
import { resources, message } from 'utilities'

// modules
import { initialState, handleRanges, updateTypes, handleSelect } from './module'

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
    }),
    ...(stage.state.coinSelected.id === 'all' ? {} : {
      coin: stage.state.coinSelected.id
    })
  }

  const coins: BackendCoin[] = backend.response({
    endpoint: resources.endpoints.get.coins,
    method: 'get',
  })?.data

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
  }, [stage.state.range, stage.state.types, stage.state.coinSelected])

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
            <StatsHead>Coins</StatsHead>
            <Select
              design="outlined"
              onSelect={handleSelect(stage)}
              options={[
                { id: 'all', value: 'All coins', main: stage.state.coinSelected.id === 'all' },
                ...coins.map(coin => ({
                  id: coin.id.toString(),
                  value: coin.name,
                  element: <ImgCoin size="small" src={resources.coin[
                    resources.utils.normaliceCoinName(coin.name)
                  ].logo}/>,
                  secondaryValue: coin.asset,
                  main: stage.state.coinSelected.id === coin.id.toString()
                }))
              ]}
            />
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