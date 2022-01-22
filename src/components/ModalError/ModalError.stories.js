import ModalError from '.'

export default {
  title: 'components/ModalError',
  component: ModalError,
}

export const Template = (args) => ({
  components: { ModalError },
  setup() {
    return { args }
  },
  template: `<ModalError v-bind="args" />`,
})
