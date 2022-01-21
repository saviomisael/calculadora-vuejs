import OperatorButton from './'

export default {
  title: 'components/OperatorButton',
  component: OperatorButton,
}

const Template = (args) => ({
  components: { OperatorButton },
  setup() {
    return { args }
  },
  template: `<OperatorButton v-bind="args" />`,
})

export const SquareRootButton = Template.bind({})

SquareRootButton.args = {
  operatorSymbol: '√',
  operation: 'square',
}

export const DivisionButton = Template.bind({})

DivisionButton.args = {
  operatorSymbol: '÷',
  operation: 'div',
}

export const MultiplicationButton = Template.bind({})

MultiplicationButton.args = {
  operatorSymbol: '×',
  operation: 'mult',
}

export const SubtrationButton = Template.bind({})

SubtrationButton.args = {
  operatorSymbol: '-',
  operation: 'sub',
}

export const AdditionButton = Template.bind({})

AdditionButton.args = {
  operatorSymbol: '+',
  operation: 'add',
}
