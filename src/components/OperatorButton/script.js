export default {
  name: 'OperatorButton',
  props: {
    operatorSymbol: {
      type: String,
      required: true,
      validator(value) {
        return ['÷', '×', '-', '+', '√'].includes(value)
      },
    },
  },
  methods: {
    handleOperatorClick(event) {
      this.$emit('on-operator-click', this.operatorSymbol)
    },
  },
  emits: ['on-operator-click'],
}
