export const getLastNumber = (stringValue) => {
  const regex = new RegExp(`-?\\d+.?\\d*$`)

  return regex.exec(stringValue)[0]
}
