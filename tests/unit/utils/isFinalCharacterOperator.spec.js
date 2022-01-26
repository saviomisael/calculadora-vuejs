import { isFinalCharacterOperator } from '../../../src/utils/isFinalCharacterOperator'

describe('isFinalCharacterOperator', () => {
  it('should return false when final character is not operator', () => {
    let result = isFinalCharacterOperator('1')

    expect(result).toBeFalsy()

    result = isFinalCharacterOperator('1 - 2')

    expect(result).toBeFalsy()
  })

  it('should return true when final character is a operator valid', () => {
    let result = isFinalCharacterOperator('√')

    expect(result).toBeTruthy()

    result = isFinalCharacterOperator('1 ÷ ')

    expect(result).toBeTruthy()

    result = isFinalCharacterOperator('1 × ')

    expect(result).toBeTruthy()

    result = isFinalCharacterOperator('1 - ')

    expect(result).toBeTruthy()

    result = isFinalCharacterOperator('1 + ')

    expect(result).toBeTruthy()

    result = isFinalCharacterOperator('1 - 2=')

    expect(result).toBeTruthy()
  })
})
