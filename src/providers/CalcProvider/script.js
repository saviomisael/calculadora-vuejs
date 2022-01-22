import { provide, ref, readonly } from 'vue'
import { getFinalCharacter } from '../../utils/getFinalCharacter'
import { replaceFinalCharacter } from '../../utils/replaceFinalCharacter'

export default {
  name: 'CalcProvider',
  setup() {
    const formula = ref('')
    const result = ref('')

    provide('formula', readonly(formula))
    provide('result', readonly(result))

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
  },
}
