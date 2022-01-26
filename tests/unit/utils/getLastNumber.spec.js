import { getLastNumber } from '../../../src/utils/getLastNumber'

describe('getLastNumber', () => {
  it('should return the last number of formula passed by parameter', () => {
    let result = getLastNumber('1 x 2')

    expect(result).toBe('2')

    result = getLastNumber('1 x -2')

    expect(result).toBe('-2')

    result = getLastNumber('1 x -2.02')

    expect(result).toBe('-2.02')

    result = getLastNumber('1 x -2.0')

    expect(result).toBe('-2.0')

    result = getLastNumber('-2.02')

    expect(result).toBe('-2.02')
  })
})
