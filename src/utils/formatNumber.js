export const formatNumber = (num) => {
  if (isNaN(Number(num))) return num

  const isNegativeNumber = num.startsWith('-')

  if (isNegativeNumber) num = num.slice(1)

  num = num.replace('.', ',')

  const isDecimalNumber = num.includes(',')

  const [wholeNumber, fractionalNumber] = num.split(',')

  num = wholeNumber
    .split('')
    .map((x, index, array) => {
      if (array.length >= 3) {
        if (index % 3 === 0) {
          return `${x}.`
        }
      }

      return x
    })
    .join('')

  if (isNegativeNumber) num = `-${num}`

  if (num.endsWith('.')) num = num.slice(0, num.length - 1)

  if (!fractionalNumber && isDecimalNumber) return `${num},`

  if (!fractionalNumber) return num

  num = `${num},${fractionalNumber}`

  return num
}

export const formatFormulaNumbers = (formula) => {
  const isFinalCharacterEqualOperator = formula.endsWith('=')

  if (isFinalCharacterEqualOperator) {
    formula = formula.slice(0, formula.length - 1)
  }

  formula = formula
    .split(' ')
    .map((x) => {
      if (/-?\d+.?\d*/.test(x)) {
        return formatNumber(x)
      }

      return x
    })
    .join(' ')

  if (isFinalCharacterEqualOperator) formula = `${formula}=`

  return formula
}
