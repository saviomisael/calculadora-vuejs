export const isComplexSquareOperation = (formula) => {
  formula = formula.trim()

  return /(÷|×|-|\+).√$/.test(formula)
}
