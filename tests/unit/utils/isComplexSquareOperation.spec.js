import { isComplexSquareOperation } from '../../../src/utils/isComplexSquareOperation'

describe('isComplexSquareOperation', () => {
  it('should return true when formula ends with a complex square operation', () => {
    let result = isComplexSquareOperation('1 - √')

    expect(result).toBeTruthy()

    result = isComplexSquareOperation('1 + √')

    expect(result).toBeTruthy()

    result = isComplexSquareOperation('1 × √')

    expect(result).toBeTruthy()

    result = isComplexSquareOperation('1 ÷ √')

    expect(result).toBeTruthy()
  })
})
