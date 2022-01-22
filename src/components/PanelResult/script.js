import { formatFormulaNumbers, formatNumber } from '../../utils/formatNumber'

export default {
  name: 'PanelResult',
  props: {
    formula: {
      type: String,
      required: true,
    },
    result: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
  },
  computed: {
    formulaVariants() {
      return { 'panel-result__formula--small': Boolean(this.result) }
    },
    resultFormatted() {
      return this.result && formatNumber(this.result)
    },
    formulaFormatted() {
      return this.formula && formatFormulaNumbers(this.formula)
    },
  },
}
