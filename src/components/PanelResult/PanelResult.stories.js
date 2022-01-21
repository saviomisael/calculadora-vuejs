import PanelResult from './'

export default {
  title: 'components/PanelResult',
  component: PanelResult,
}

const Template = (args) => ({
  components: { PanelResult },
  setup() {
    return { args }
  },
  template: `<PanelResult v-bind="args" />`,
})

export const Default = Template.bind({})

Default.args = {
  formula: '1 x 2',
  result: '2',
}

export const WithoutResult = Template.bind({})

WithoutResult.args = {
  formula: '1 x 2',
}
