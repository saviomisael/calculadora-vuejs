import { getFinalCharacter } from './getFinalCharacter'

export const isFinalCharacterOperator = (formula) => {
  formula = formula.trim()

  const finalChar = getFinalCharacter(formula)

  return /(√|÷|×|-|\+|=)/.test(finalChar)
}
