export default {
  props: {
    operatorSymbol: {
      type: String,
      required: true,
    },
    operation: {
      type: String,
      required: true,
      validator(value) {
        return ['square', 'div', 'mult', 'sub', 'add'].includes(value)
      },
    },
  },
  methods: {
    handleOperatorClick(event) {
      this.$emit('on-operator-click', event.target.dataset.operation)
    },
  },
  emits: ['on-operator-click'],
}
