export const replaceFinalCharacterByOperator = (formulaValue, operator) => {
  formulaValue = formulaValue.trim()

  return `${formulaValue.slice(0, formulaValue.length - 2)} ${operator} `
}
