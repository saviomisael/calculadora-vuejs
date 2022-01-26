export const getLastNumber = (formulaValue) => {
  const regex = new RegExp(`-?\\d+.?\\d*$`)

  return regex.exec(formulaValue)[0]
}
