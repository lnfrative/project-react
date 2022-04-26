// region import
import React, { useContext, useEffect } from 'react'
import { DateRange } from 'react-date-range'
import { CircularProgress } from '@mui/material'

// hooks
import { useStage, useEndScroll, useStrictEffect, useApiStore } from 'hooks'

// interfaces
import { BackendTransaction } from 'interfaces'

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
  const api = useApiStore()
  const stage = useStage(initialState)
  const backend = useContext(Backend)
  const { endScroll } = useEndScroll({ ep: 100 })

  const range = [
    new Date(stage.state.range.startDate).getTime(),
    new Date(stage.state.range.endDate).getTime(),
  ]

  const params = {
    ...(stage.state.types.length === 0 ? {} : {
      types: stage.state.types.join(',')
    }),
    ...(range[0] === range[1] ? {} : {
      range: range.join(',')
    }),
    ...(stage.state.coinSelected.id === 'all' ? {} : {
      coin: stage.state.coinSelected.id
    }),

    page: stage.state.pages[stage.state.pages.length - 1]
  }

  const transactions: BackendTransaction[] | undefined = backend.response({
    endpoint: resources.endpoints.get.transactions,
    method: 'get',
    params,
  })?.data

  useEffect(() => {
    stage.commitState({
      ...stage.state,
      pages: [1]
    })
  }, [stage.state.range, stage.state.types, stage.state.coinSelected])

  useEffect(() => {
    // TODO: Pull this logic out of here.
    const request = stage.state.pages.reduce((previousValue, page) => {
      if (previousValue) return previousValue
      if (stage.state.pages.length === 1) return true

      const response = !!backend.response({
        method: 'get',
        endpoint: resources.endpoints.get.transactions,
        params: {
          ...params,
          page,
        }
      })?.data

      return response
      
    }, false)

    if (request) {
      backend.request({
        endpoint: resources.endpoints.get.transactions,
        method: 'get',
        params,
      })
    }

  }, [stage.state.range, stage.state.types, stage.state.coinSelected, stage.state.pages])

  useStrictEffect(() => {
    if (endScroll && transactions && transactions.length !== 0) {
      stage.commitState({
        ...stage.state,
        pages: [...stage.state.pages, stage.state.pages.length + 1]
      })
    }
  }, [endScroll])

  return (
    <Container>
      <PrimaryContent>
        <StyledPanel>
          <Panel title="Transactions">
            {stage.state.pages.map(page => {
              const transactionsPage: BackendTransaction[] | undefined = backend.response({
                method: 'get',
                endpoint: resources.endpoints.get.transactions,
                params: {
                  ...params,
                  page,
                }
              })?.data

              if (!transactionsPage) return null
              return transactionsPage.map(t => {
                const [coin] = api.coins.data.filter(value => value.id === t.coin_id)
                const txURL = resources.coin[resources.utils.normaliceCoinName(coin.name)].tx
                return (
                  <ContainerTransaction href={txURL + t.txid} target="_blank" key={t.id}>
                    <Transaction data={t} />
                  </ContainerTransaction>
                )
              })
            })}
            {!transactions && (
              <ContainerFeedback>
                <CircularProgress color="inherit" />
              </ContainerFeedback>
            )}
            {transactions?.length === 0 && stage.state.pages.length === 1 && (
              <ContainerFeedback>
                {message({ id: 'EMPTY_TRANSACTIONS_HISTORY' })}
              </ContainerFeedback>
            )}
            {transactions?.length === 0 && stage.state.pages.length !== 1 && (
              <ContainerFeedback>
                {message({ id: 'NO_MORE_TX_TO_SHOW' })}
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
                ...api.coins.data.map(coin => ({
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