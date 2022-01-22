const replaceDivisionOperator = (formula) => {
  return formula.replaceAll('÷', '/')
}

const replaceMultiplicationOperator = (formula) => {
  return formula.replaceAll('×', '*')
}

const replaceSquareOperator = (formula) => {
  let array

  while ((array = /√ -?\d+\.?\d*/.exec(formula)) !== null) {
    const matched = array[0]

    const num = matched.split(' ')[1]

    formula = formula.replace(matched, `sqrt(${num})`)
  }

  return formula
}

const composeReplaces =
  (...fns) =>
  (stringValue) =>
    fns.reduce(
      (prevValue, currentFunction) => currentFunction(prevValue),
      stringValue,
    )

export const toMathFormulaFormat = (formula) => {
  return composeReplaces(
    replaceDivisionOperator,
    replaceMultiplicationOperator,
    replaceSquareOperator,
  )(formula)
}
