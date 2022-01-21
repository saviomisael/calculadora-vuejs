import ButtonsGrid from '.'

export default {
  title: 'components/ButtonsGrid',
  component: ButtonsGrid,
}

export const Template = (args) => ({
  components: { ButtonsGrid },
  setup() {
    return { args }
  },
  template: `<ButtonsGrid v-bind="args" />`,
})
