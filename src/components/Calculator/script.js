import { inject } from 'vue'
import PanelResult from '../PanelResult'
import ButtonsGrid from '../ButtonsGrid'

export default {
  name: 'Calculator',
  setup() {
    const formula = inject('formula')
    const result = inject('result')

    return {
      formula,
      result,
    }
  },
  components: {
    PanelResult,
    ButtonsGrid,
  },
}
