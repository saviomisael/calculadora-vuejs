import {
  formatFormulaNumbers,
  formatNumber,
} from '../../../src/utils/formatNumber'

describe('formatNumber', () => {
  it('should return a number formatted to pt-br format', () => {
    let result = formatNumber('1000')

    expect(result).toBe('1.000')

    result = formatNumber('1000000')

    expect(result).toBe('1.000.000')

    result = formatNumber('100000')

    expect(result).toBe('100.000')

    result = formatNumber('10.0')

    expect(result).toBe('10,0')

    result = formatNumber('10.')

    expect(result).toBe('10,')

    result = formatNumber('10.000')

    expect(result).toBe('10,000')

    result = formatNumber('10.02')

    expect(result).toBe('10,02')

    result = formatNumber('-10.02')

    expect(result).toBe('-10,02')

    result = formatNumber('-10.')

    expect(result).toBe('-10,')

    result = formatNumber('-10.0')

    expect(result).toBe('-10,0')

    result = formatNumber('25.455844122715714')

    expect(result).toBe('25,455844122715714')
  })

  it('should return the same parameter when pass a complex number', () => {
    const result = formatNumber('3i')

    expect(result).toBe('3i')
  })
})

describe('formatFormulaNumbers', () => {
  it('should replace dot per comma when formula numbers are decimals', () => {
    let result = formatFormulaNumbers('1.2 + 2')

    expect(result).toBe('1,2 + 2')

    result = formatFormulaNumbers('1. + 2')

    expect(result).toBe('1, + 2')

    result = formatFormulaNumbers('1.0 + 2')

    expect(result).toBe('1,0 + 2')

    result = formatFormulaNumbers('1.02 + 2')

    expect(result).toBe('1,02 + 2')

    result = formatFormulaNumbers('25.455844122715714')

    expect(result).toBe('25,455844122715714')

    result = formatFormulaNumbers('1000000')

    expect(result).toBe('1.000.000')
  })
})
