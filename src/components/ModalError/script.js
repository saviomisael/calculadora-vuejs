export default {
  name: 'ModalError',
  emits: ['on-close-modal'],
  methods: {
    handleCloseModalClick() {
      this.$emit('on-close-modal')
    },
    handleKeyDown({ key }) {
      if (key === 'Escape') {
        this.$emit('on-close-modal')
      }
    },
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown)
  },
  unmounted() {
    document.removeEventListener('keydown', this.handleKeyDown)
  },
}
