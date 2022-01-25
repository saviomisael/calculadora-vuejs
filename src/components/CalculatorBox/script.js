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

    return {
      formula,
      result,
      occurDivisionPerZero,
      clearDivPerZero,
      appendFormula,
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
      if (/[0-9.]/.test(key)) {
        this.appendFormula(key)
      }
    },
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown)
  },
  unmounted() {
    document.addEventListener('keydown', this.handleKeyDown)
  },
}
