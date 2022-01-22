import { inject } from 'vue'
import OperatorButton from '../OperatorButton'
import DigitButton from '../DigitButton'
import backspaceIcon from '../../assets/images/backspace.svg'

export default {
  name: 'ButtonsGrid',
  setup() {
    const appendFormula = inject('appendFormula')
    const addOperator = inject('addOperator')

    return {
      appendFormula,
      addOperator,
    }
  },
  data() {
    return {
      backspaceIcon,
    }
  },
  components: {
    OperatorButton,
    DigitButton,
  },
  methods: {
    handleDigitClick(digit) {
      this.appendFormula(digit)
    },
    handleOperatorClick(operator) {
      this.addOperator(operator)
    },
  },
}
