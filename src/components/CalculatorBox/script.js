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
    const backspace = inject('backspace')

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
