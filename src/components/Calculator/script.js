import { inject } from 'vue'
import PanelResult from '../PanelResult'
import ButtonsGrid from '../ButtonsGrid'
import ModalError from '../ModalError'

export default {
  name: 'Calculator',
  setup() {
    const formula = inject('formula')
    const result = inject('result')
    const occurDivisionPerZero = inject('occurDivisionPerZero')
    const clearDivPerZero = inject('clearDivPerZero')

    return {
      formula,
      result,
      occurDivisionPerZero,
      clearDivPerZero,
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
