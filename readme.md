# binance-list-active-tradepairs [![Build status](https://travis-ci.org/amchelle/binance-list-active-tradepairs.svg?branch=master)](https://travis-ci.org/amchelle/binance-list-active-tradepairs) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/binance-list-active-tradepairs.svg)](https://npmjs.org/package/@strong-roots-capital/binance-list-active-tradepairs) [![codecov](https://codecov.io/gh/amchelle/binance-list-active-tradepairs/branch/master/graph/badge.svg)](https://codecov.io/gh/amchelle/binance-list-active-tradepairs)

> List tradepairs actively trading on Binance

## Install

```shell
npm install @strong-roots-capital/binance-list-active-tradepairs
```

## Use

```typescript
import { binanceListActiveTradepairs } from '@strong-roots-capital/binance-list-active-tradepairs'

(async () => {
    console.log(await binanceListActiveTradepairs())
        //=> [ 'XRPETH',
        // 'MODBTC',
        // 'MODETH',
        // 'ENJBTC',
        // 'ENJETH',
        // 'STORJBTC',
        // 'STORJETH',
        // 'BNBUSDT',
        // 'VENBNB' ]
})
```

## Related

- [binance-api-node](https://github.com/binance-exchange/binance-api-node)
