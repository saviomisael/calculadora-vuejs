import { replaceFinalCharacterByOperator } from '../../../src/utils/replaceFinalCharacterByOperator'

describe('replaceFinalCharacterByOperator', () => {
  it('should replace final character when formula ends with division operator', () => {
    let result = replaceFinalCharacterByOperator('1 ÷ ', '-')

    expect(result).toBe('1 - ')

    result = replaceFinalCharacterByOperator('1 ÷ ', '÷')

    expect(result).toBe('1 ÷ ')

    result = replaceFinalCharacterByOperator('1 ÷ ', '+')

    expect(result).toBe('1 + ')

    result = replaceFinalCharacterByOperator('1 ÷ ', '×')

    expect(result).toBe('1 × ')
  })

  it('should replace final character when formula ends with minus operator', () => {
    let result = replaceFinalCharacterByOperator('1 - ', '-')

    expect(result).toBe('1 - ')

    result = replaceFinalCharacterByOperator('1 - ', '÷')

    expect(result).toBe('1 ÷ ')

    result = replaceFinalCharacterByOperator('1 - ', '+')

    expect(result).toBe('1 + ')

    result = replaceFinalCharacterByOperator('1 - ', '×')

    expect(result).toBe('1 × ')
  })

  it('should replace final character when formula ends with plus operator', () => {
    let result = replaceFinalCharacterByOperator('1 + ', '-')

    expect(result).toBe('1 - ')

    result = replaceFinalCharacterByOperator('1 + ', '÷')

    expect(result).toBe('1 ÷ ')

    result = replaceFinalCharacterByOperator('1 + ', '+')

    expect(result).toBe('1 + ')

    result = replaceFinalCharacterByOperator('1 + ', '×')

    expect(result).toBe('1 × ')
  })

  it('should replace final character when formula ends with multiplication operator', () => {
    let result = replaceFinalCharacterByOperator('1 × ', '-')

    expect(result).toBe('1 - ')

    result = replaceFinalCharacterByOperator('1 × ', '÷')

    expect(result).toBe('1 ÷ ')

    result = replaceFinalCharacterByOperator('1 × ', '+')

    expect(result).toBe('1 + ')

    result = replaceFinalCharacterByOperator('1 × ', '×')

    expect(result).toBe('1 × ')
  })

  it('should replace final character when formula ends with square root operator', () => {
    let result = replaceFinalCharacterByOperator('9 √', '-')

    expect(result).toBe('9 - ')

    result = replaceFinalCharacterByOperator('9 √', '√')

    expect(result).toBe('9 √ ')

    result = replaceFinalCharacterByOperator('9 √', '+')

    expect(result).toBe('9 + ')

    result = replaceFinalCharacterByOperator('9 √', '×')

    expect(result).toBe('9 × ')

    result = replaceFinalCharacterByOperator('9 √', '÷')

    expect(result).toBe('9 ÷ ')

    result = replaceFinalCharacterByOperator('3 - √', '-')

    expect(result).toBe('3 - - ')

    result = replaceFinalCharacterByOperator('3 - √', '√')

    expect(result).toBe('3 - √ ')

    result = replaceFinalCharacterByOperator('3 - √', '+')

    expect(result).toBe('3 - + ')

    result = replaceFinalCharacterByOperator('3 - √', '×')

    expect(result).toBe('3 - × ')

    result = replaceFinalCharacterByOperator('3 - √', '÷')

    expect(result).toBe('3 - ÷ ')
  })
})
