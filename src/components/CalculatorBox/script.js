import { inject } from 'vue'
import PanelResult from '../PanelResult'
import ButtonsGrid from '../ButtonsGrid'
import ModalError from '../ModalError'

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

    return {
      formula,
      result,
      occurDivisionPerZero,
      clearDivPerZero,
      appendFormula,
      addOperator,
      resolveFormula,
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
    handleKeyDown({ key }) {
      const operatorsBindings = {
        '*': '×',
        '-': '-',
        '+': '+',
        '/': '÷',
      }

      if (/[0-9.]/.test(key)) {
        this.appendFormula(key)
      }

      if (['*', '-', '+', '/'].includes(key)) {
        const operator = operatorsBindings[key]
        this.addOperator(operator)
      }

      if (key === '=') {
        this.resolveFormula()
      }
    },
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown)
  },
  beforeUnmount() {
    document.addEventListener('keydown', this.handleKeyDown)
  },
}
