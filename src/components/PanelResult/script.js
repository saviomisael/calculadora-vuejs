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
      return this.result && this.truncResult(this.result)
    },
    formulaFormatted() {
      return this.formula && formatFormulaNumbers(this.formula)
    },
  },
  methods: {
    truncResult(result) {
      result = formatNumber(result)

      if (/,0*$/.test(result)) {
        const commaIndex = result.lastIndexOf(',')

        return result.slice(0, commaIndex)
      }

      return result
    },
  },
}
