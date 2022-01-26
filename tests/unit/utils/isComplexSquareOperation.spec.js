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

  it('should return false when formula does not end with a complex square operation', () => {
    let result = isComplexSquareOperation('1 + 2')

    expect(result).toBeFalsy()

    result = isComplexSquareOperation('√ 9 + 1')

    expect(result).toBeFalsy()

    result = isComplexSquareOperation('√ 9 + ')

    expect(result).toBeFalsy()

    result = isComplexSquareOperation('√')

    expect(result).toBeFalsy()
  })
})
