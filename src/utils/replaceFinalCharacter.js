export const replaceFinalCharacter = (stringValue, replaceChar) => {
  stringValue = stringValue.trim()

  return `${stringValue.slice(0, stringValue.length - 2)} ${replaceChar} `
}
