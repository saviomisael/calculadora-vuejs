import Calculator from '.'

export default {
  title: 'components/Calculator',
  component: Calculator,
}

export const Template = (args) => ({
  components: { Calculator },
  setup() {
    return { args }
  },
  template: `<Calculator v-bind="args" />`,
})
