export default {
  name: 'ModalError',
  emits: ['on-close-modal'],
  methods: {
    handleCloseModalClick() {
      this.$emit('on-close-modal')
    },
  },
}
