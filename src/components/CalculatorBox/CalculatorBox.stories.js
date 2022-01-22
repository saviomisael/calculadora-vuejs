import CalculatorBox from '.'

export default {
  title: 'components/CalculatorBox',
  component: CalculatorBox,
}

export const Template = (args) => ({
  components: { CalculatorBox },
  setup() {
    return { args }
  },
  template: `<CalculatorBox v-bind="args" />`,
})
