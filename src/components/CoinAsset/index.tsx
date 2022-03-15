// region import
import React, { useContext, useEffect } from 'react'

// contexts
import { Backend, Currency } from 'contexts'

// interfaces
import { BackendCoin, CoinAssetProps } from 'interfaces'

// components
import { ValueCoin, ValuePrice, SVGValueVariation } from 'components'

// utilities
import { resources, message } from 'utilities'

// styles
import { Container, SubContainer, Label } from './style'
// endregion

function CoinAsset(props: CoinAssetProps) {
  const backend = useContext(Backend)
  const currency = useContext(Currency)

  const coins: BackendCoin[] = backend.response({
    method: 'get',
    endpoint: resources.endpoints.get.coins,
  })?.data

  const [coin] = coins.filter(value => props.wallet.coin_id === value.id)
  const price = coin.market_data.prices[currency.state.id ?? 'usd']

  useEffect(() => {
    backend.request({
      method: 'get',
      endpoint: resources.endpoints.get.coins
    })
  }, [])

  return (
    <Container>
      <SubContainer>
        <ValueCoin
          srcImageCoin={
            resources.coin[resources.utils.normaliceCoinName(coin.name)].logo
          }
          value={resources.utils.satsToBTC(props.wallet.balance)}
          name={coin.name}
          shortname={coin.asset}
          decimals={8}
        />
      </SubContainer>
      <SubContainer>
        <Label>{message({ id: 'PRICE' })}</Label>
        <ValuePrice value={price} />
      </SubContainer>
      <SubContainer>
        <Label>{message({ id: 'HOLDING_VALUE' })}</Label>
        <ValuePrice value={price * resources.utils.satsToBTC(props.wallet.balance)} />
      </SubContainer>
      <SubContainer style={{ marginBottom: 0 }}>
        <Label>{message({ id: 'CHANGE_30D' })}</Label>
        <SVGValueVariation
          variation={coin.market_data.price_change_30d}
          coordsValueVariation={coin.market_data.chart_1d}
        />
      </SubContainer>
    </Container>
  )
}

export default CoinAsset