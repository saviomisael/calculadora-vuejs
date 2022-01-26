import { replaceFinalCharacter } from '../../../src/utils/replaceFinalCharacter'

describe('replaceFinalCharacter', () => {
  it('should replace final character when formula ends with division operator', () => {
    let result = replaceFinalCharacter('1 ÷ ', '-')

    expect(result).toBe('1 - ')

    result = replaceFinalCharacter('1 ÷ ', '÷')

    expect(result).toBe('1 ÷ ')

    result = replaceFinalCharacter('1 ÷ ', '+')

    expect(result).toBe('1 + ')

    result = replaceFinalCharacter('1 ÷ ', '×')

    expect(result).toBe('1 × ')
  })
})