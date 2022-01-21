export default {
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
  },
}
