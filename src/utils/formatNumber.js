export const formatNumber = (num) => {
  return isNaN(Number(num)) ? num : Number(num).toLocaleString('pt-BR')
}

export const formatFormulaNumbers = (formula) => {
  const isFinalCharacterEqualOperator = formula.endsWith('=')

  if (isFinalCharacterEqualOperator) {
    formula = formula.slice(0, formula.length - 1)
  }

  formula = formula
    .split(' ')
    .map((x) => {
      if (/\.0?$/.test(x)) {
        return x.replace('.', ',')
      }

      if (/-?\d+.?\d*/.test(x)) {
        return Number(x).toLocaleString('pt-BR')
      }

      return x
    })
    .join(' ')

  if (isFinalCharacterEqualOperator) formula = `${formula}=`

  return formula
}
