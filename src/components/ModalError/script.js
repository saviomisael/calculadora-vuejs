import { useDocumentEvent } from '../../composables/useDocumentEvent'

export default {
  name: 'ModalError',
  setup(props, { emit }) {
    useDocumentEvent('keydown', ({ key }) => {
      if (key === 'Escape') {
        emit('on-close-modal')
      }
    })
  },
  emits: ['on-close-modal'],
  methods: {
    handleCloseModalClick() {
      this.$emit('on-close-modal')
    },
  },
}
