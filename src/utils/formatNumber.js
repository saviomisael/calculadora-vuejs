export const formatNumber = (num) => {
  if (isNaN(Number(num))) return num

  const isDecimalNumber = num.includes('.')

  const [wholeNumber, fractionalNumber] = num.split('.')

  num = Number(wholeNumber).toLocaleString('pt-BR')

  if (num.endsWith('.')) num = num.slice(0, num.length - 1)

  if (!fractionalNumber && isDecimalNumber) return `${num},`

  if (!fractionalNumber) return num

  return `${num},${fractionalNumber}`
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
