/**
 * binance-list-active-tradepairs
 * List tradepairs actively trading on Binance
 */
import Binance from 'binance-api-node'

const binance = Binance()
/**
 * Returns the list of actively-traded tradepairs on Binance.
 *
 * @return List of actively-traded tradepairs on Binance
 */
export default async function binanceListActiveTradepairs(): Promise<string[]> {

    const response = await binance.prices()
    return Object.keys(response)

}
