import { provide, ref, readonly } from 'vue'
import { evaluate } from 'mathjs'

import { getFinalCharacter } from '../../utils/getFinalCharacter'
import { getLastNumber } from '../../utils/getLastNumber'
import { isFinalCharacterOperator } from '../../utils/isFinalCharacterOperator'
import { replaceFinalCharacterByOperator } from '../../utils/replaceFinalCharacterByOperator'
import { formulaContainsDivPerZero } from '../../utils/formulaContainsDivPerZero'
import { toMathFormulaFormat } from '../../utils/toMathFormulaFormat'
import { isComplexSquareOperation } from '../../utils/isComplexSquareOperation'

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
      if (!formula.value && value === '.') return

      if (formula.value.endsWith('=')) return

      formula.value = `${formula.value}${value}`
    })

    provide('addOperator', (operator) => {
      if (!formula.value && operator !== '√') return

      if (!formula.value && operator === '√') {
        formula.value = `${operator} `
        return
      }

      if (
        formula.value.trim().length === 1 &&
        getFinalCharacter(formula.value) === '√'
      )
        return

      if (
        ['÷', '×', '-', '+', '√'].includes(getFinalCharacter(formula.value)) &&
        getFinalCharacter(formula.value) === operator
      ) {
        return
      }

      if (isComplexSquareOperation(formula.value)) {
        return
      }

      if (
        ['÷', '×', '-', '+'].includes(getFinalCharacter(formula.value)) &&
        operator !== '√'
      ) {
        formula.value = replaceFinalCharacterByOperator(formula.value, operator)
        return
      }

      if (
        ['÷', '×', '-', '+'].includes(getFinalCharacter(formula.value)) &&
        operator === '√'
      ) {
        formula.value = `${formula.value}${operator} `
        return
      }

      formula.value = `${formula.value} ${operator} `
    })

    provide('invertSignal', () => {
      if (!formula.value || isFinalCharacterOperator(formula.value)) return

      let lastNumber = getLastNumber(formula.value)

      const indexOfLastNumber = formula.value.lastIndexOf(lastNumber)

      lastNumber = Number(lastNumber) * -1

      formula.value = `${formula.value.slice(
        0,
        indexOfLastNumber,
      )}${lastNumber}`
    })

    provide('resolveFormula', () => {
      occurDivisionPerZero.value = false

      if (!formula.value || isFinalCharacterOperator(formula.value)) return

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

    provide('backspace', () => {
      if (!formula.value) return

      if (/[0-9]$/.test(formula.value) || /-$/.test(formula.value)) {
        formula.value = formula.value.slice(0, formula.value.length - 1)
        return
      }

      if (formula.value.endsWith('=')) {
        result.value = ''
      }

      let newFormula = formula.value.trim()
      newFormula = newFormula.slice(0, newFormula.length - 1)
      newFormula = newFormula.trim()

      formula.value = newFormula
    })
  },
}
