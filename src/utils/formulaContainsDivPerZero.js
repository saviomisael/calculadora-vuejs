export const formulaContainsDivPerZero = (formula) => {
  return /÷ 0\.?0*/g.test(formula)
}
