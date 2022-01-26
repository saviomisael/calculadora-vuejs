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

  it('should replace final character when formula ends with minus operator', () => {
    let result = replaceFinalCharacter('1 - ', '-')

    expect(result).toBe('1 - ')

    result = replaceFinalCharacter('1 - ', '÷')

    expect(result).toBe('1 ÷ ')

    result = replaceFinalCharacter('1 - ', '+')

    expect(result).toBe('1 + ')

    result = replaceFinalCharacter('1 - ', '×')

    expect(result).toBe('1 × ')
  })

  it('should replace final character when formula ends with plus operator', () => {
    let result = replaceFinalCharacter('1 + ', '-')

    expect(result).toBe('1 - ')

    result = replaceFinalCharacter('1 + ', '÷')

    expect(result).toBe('1 ÷ ')

    result = replaceFinalCharacter('1 + ', '+')

    expect(result).toBe('1 + ')

    result = replaceFinalCharacter('1 + ', '×')

    expect(result).toBe('1 × ')
  })

  it('should replace final character when formula ends with multiplication operator', () => {
    let result = replaceFinalCharacter('1 × ', '-')

    expect(result).toBe('1 - ')

    result = replaceFinalCharacter('1 × ', '÷')

    expect(result).toBe('1 ÷ ')

    result = replaceFinalCharacter('1 × ', '+')

    expect(result).toBe('1 + ')

    result = replaceFinalCharacter('1 × ', '×')

    expect(result).toBe('1 × ')
  })

  it('should replace final character when formula ends with square root operator', () => {
    let result = replaceFinalCharacter('9 √', '-')

    expect(result).toBe('9 - ')

    result = replaceFinalCharacter('9 √', '√')

    expect(result).toBe('9 √ ')

    result = replaceFinalCharacter('9 √', '+')

    expect(result).toBe('9 + ')

    result = replaceFinalCharacter('9 √', '×')

    expect(result).toBe('9 × ')

    result = replaceFinalCharacter('9 √', '÷')

    expect(result).toBe('9 ÷ ')

    result = replaceFinalCharacter('3 - √', '-')

    expect(result).toBe('3 - - ')

    result = replaceFinalCharacter('3 - √', '√')

    expect(result).toBe('3 - √ ')

    result = replaceFinalCharacter('3 - √', '+')

    expect(result).toBe('3 - + ')

    result = replaceFinalCharacter('3 - √', '×')

    expect(result).toBe('3 - × ')

    result = replaceFinalCharacter('3 - √', '÷')

    expect(result).toBe('3 - ÷ ')
  })
})
