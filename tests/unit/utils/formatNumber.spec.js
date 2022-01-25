import { formatNumber } from '../../../src/utils/formatNumber'

describe('formatNumber', () => {
  it('should return a number formatted to pt-br format', () => {
    let result = formatNumber('1000')

    expect(result).toBe('1.000')

    result = formatNumber('10.0')

    expect(result).toBe('10')

    result = formatNumber('10.02')

    expect(result).toBe('10,02')

    result = formatNumber('-10.02')

    expect(result).toBe('-10,02')
  })

  it('should return the same parameter when pass a complex number', () => {
    const result = formatNumber('3i')

    expect(result).toBe('3i')
  })
})
