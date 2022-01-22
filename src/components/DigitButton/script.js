export default {
  name: 'DigitButton',
  props: {
    digit: {
      type: String,
      required: true,
      validator(value) {
        return /^[0-9]$/.test(value) || value === '.'
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
