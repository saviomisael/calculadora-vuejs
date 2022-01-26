export const replaceFinalCharacter = (formulaValue, replaceChar) => {
  formulaValue = formulaValue.trim()

  return `${formulaValue.slice(0, formulaValue.length - 2)} ${replaceChar} `
}
