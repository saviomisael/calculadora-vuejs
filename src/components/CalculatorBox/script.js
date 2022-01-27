import { inject } from 'vue'
import PanelResult from '../PanelResult'
import ButtonsGrid from '../ButtonsGrid'
import ModalError from '../ModalError'
import { useDocumentEvent } from '../../composables/useDocumentEvent'

export default {
  name: 'CalculatorBox',
  setup() {
    const formula = inject('formula')
    const result = inject('result')
    const occurDivisionPerZero = inject('occurDivisionPerZero')
    const clearDivPerZero = inject('clearDivPerZero')

    const appendFormula = inject('appendFormula')
    const addOperator = inject('addOperator')
    const resolveFormula = inject('resolveFormula')
    const backspace = inject('backspace')

    useDocumentEvent('keydown', ({ key }) => {
      const operatorsBindings = {
        '*': '×',
        '-': '-',
        '+': '+',
        '/': '÷',
      }

      if (/^[0-9.]$/.test(key)) {
        appendFormula(key)
      }

      if (['*', '-', '+', '/'].includes(key)) {
        const operator = operatorsBindings[key]
        addOperator(operator)
      }

      if (key === '=') {
        resolveFormula()
      }

      if (key === 'Backspace') {
        backspace()
      }
    })

    return {
      formula,
      result,
      occurDivisionPerZero,
      clearDivPerZero,
      appendFormula,
      addOperator,
      resolveFormula,
      backspace,
    }
  },
  components: {
    PanelResult,
    ButtonsGrid,
    ModalError,
  },
  methods: {
    handleCloseModalClick() {
      this.clearDivPerZero()
    },
  },
}
