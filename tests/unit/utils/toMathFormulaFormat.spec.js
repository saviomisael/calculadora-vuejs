import { toMathFormulaFormat } from '../../../src/utils/toMathFormulaFormat'

describe('toMathFormulaFormat', () => {
  it('should replaces every division operator to math format', () => {
    const result = toMathFormulaFormat('9 ÷ 3 ÷ 1')

    expect(result).toBe('9 / 3 / 1')
  })

  it('should replaces every multiplication operator to math format', () => {
    const result = toMathFormulaFormat('9 × 3 × 1')

    expect(result).toBe('9 * 3 * 1')
  })
})
