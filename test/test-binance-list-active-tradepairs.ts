import test from 'ava'

/**
 * Library under test
 */

import binanceListActiveTradepairs from '../src/binance-list-active-tradepairs'


test('should return a Promise of string[] of active tradepairs', async t => {

    const active = await binanceListActiveTradepairs()
       for (const tradepair of active) {
        if ('' === tradepair) {
            t.fail()
        }
    }
    t.pass()
})
