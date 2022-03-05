// region import
import React, { useContext, useEffect } from 'react'
import { CircularProgress } from '@mui/material'

// interfaces
import { BackendTransaction } from 'interfaces'

// contexts
import { Backend } from 'contexts'

// components
import { Panel, Transaction } from 'components'

// utilities
import { resources } from 'utilities'

// styles
import {
  Container,
  PrimaryContent,
  SecondaryContent,
  StyledPanel,
  ContainerTransaction,
  LoaderContainer
} from './style'
// endregion

function Transactions() {
  const backend = useContext(Backend)

  const transactions: BackendTransaction[] | undefined = backend.response({
    endpoint: resources.endpoints.get.transactions,
    method: 'get',
  })?.data

  useEffect(() => {
    backend.request({
      endpoint: resources.endpoints.get.transactions,
      method: 'get'
    })
  }, [])

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
              <LoaderContainer>
                <CircularProgress color="inherit" />
              </LoaderContainer>
            )}
          </Panel>
        </StyledPanel>
      </PrimaryContent>
      <SecondaryContent>
        <StyledPanel>
          <Panel title="Filters">
            Filters
          </Panel>
        </StyledPanel>
      </SecondaryContent>
    </Container>
  )
}

export default Transactions