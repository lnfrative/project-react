// region import
import React, { useContext } from 'react'

// contexts
import { Currency } from 'contexts'

// interfaces
import { CoinAssetProps } from 'interfaces'

// components
import { ValueCoin, ValuePrice, SVGValueVariation } from 'components'

// utilities
import { resources, message } from 'utilities'

// styles
import { Container, SubContainer, Label } from './style'
// endregion

function CoinAsset(props: CoinAssetProps) {
  const currency = useContext(Currency)
  const price = props.coin.market_data.prices[currency.state.id ?? 'usd']

  return (
    <Container>
      <SubContainer>
        <ValueCoin
          srcImageCoin={
            resources.coin[resources.utils.normaliceCoinName(props.coin.name)].logo
          }
          value={resources.utils.satsToBTC(props.wallet.balance)}
          name={props.coin.name}
          shortname={props.coin.asset}
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
          variation={props.coin.market_data.price_change_30d}
          coordsValueVariation={props.coin.market_data.chart_1d}
        />
      </SubContainer>
    </Container>
  )
}

export default CoinAsset