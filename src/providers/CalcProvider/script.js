import { provide, ref, readonly } from 'vue'
import { evaluate } from 'mathjs'

import { getFinalCharacter } from '../../utils/getFinalCharacter'
import { getLastNumber } from '../../utils/getLastNumber'
import { isFinalCharacterOperator } from '../../utils/isFinalCharacterOperator'
import { replaceFinalCharacter } from '../../utils/replaceFinalCharacter'
import { formulaContainsDivPerZero } from '../../utils/formulaContainsDivPerZero'
import { toMathFormulaFormat } from '../../utils/toMathFormulaFormat'

export default {
  name: 'CalcProvider',
  setup() {
    const formula = ref('')
    const result = ref('')
    const occurDivisionPerZero = ref(false)

    provide('formula', readonly(formula))
    provide('result', readonly(result))
    provide('occurDivisionPerZero', readonly(occurDivisionPerZero))

    provide('appendFormula', (value) => {
      formula.value = `${formula.value}${value}`
    })

    provide('addOperator', (operator) => {
      if (!formula.value && operator !== '√') return

      if (!formula.value && operator === '√') {
        formula.value = `${operator} `
        return
      }

      if (formula.value && getFinalCharacter(formula.value) === '√') return

      if (
        formula.value &&
        ['÷', '×', '-', '+'].includes(getFinalCharacter(formula.value))
      ) {
        formula.value = replaceFinalCharacter(formula.value, operator)
        return
      }

      formula.value = `${formula.value} ${operator} `
    })

    provide('invertSignal', () => {
      if (!formula.value) return

      let lastNumber = getLastNumber(formula.value)

      const indexOfLastNumber = formula.value.lastIndexOf(lastNumber)

      lastNumber = Number(lastNumber) * -1

      formula.value = `${formula.value.slice(
        0,
        indexOfLastNumber,
      )} ${lastNumber}`
    })

    provide('resolveFormula', () => {
      occurDivisionPerZero.value = false

      if (!formula.value) return

      if (isFinalCharacterOperator(formula.value)) return

      if (formulaContainsDivPerZero(formula.value)) {
        occurDivisionPerZero.value = true

        return
      }

      result.value = String(evaluate(toMathFormulaFormat(formula.value)))

      formula.value = `${formula.value}=`
    })

    provide('clear', () => {
      formula.value = ''
      result.value = ''
      occurDivisionPerZero.value = false
    })

    provide('clearDivPerZero', () => {
      occurDivisionPerZero.value = false
    })
  },
}
