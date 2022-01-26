import { formulaContainsDivPerZero } from '../../../src/utils/formulaContainsDivPerZero'

describe('formulaContainsDivPerZero', () => {
  it('should return true when formula contains division by zero', () => {
    const result = formulaContainsDivPerZero('1 ÷ 0')

    expect(result).toBeTruthy()
  })
})
