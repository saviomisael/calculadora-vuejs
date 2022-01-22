export const getFinalCharacter = (stringValue) => {
  stringValue = stringValue.trim()

  return stringValue[stringValue.length - 1]
}
