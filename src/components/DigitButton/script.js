export default {
  props: {
    digit: {
      type: Number,
      required: true,
      validator(value) {
        return /^[0-9]$/.test(value)
      },
    },
  },
  methods: {
    handleDigitClick(event) {
      this.$emit('on-digit-click', event.target.textContent)
    },
  },
  emits: ['on-digit-click'],
}
