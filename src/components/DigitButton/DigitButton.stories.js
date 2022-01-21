import DigitButton from '.'

export default {
  title: 'components/DigitButton',
  component: DigitButton,
}

const Template = (args) => ({
  components: { DigitButton },
  setup() {
    return { args }
  },
  template: `<DigitButton v-bind="args" />`,
})

export const WithDigit = Template.bind({})

WithDigit.args = {
  digit: 0,
}
