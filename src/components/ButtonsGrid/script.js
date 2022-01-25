import { inject } from 'vue'
import OperatorButton from '../OperatorButton'
import DigitButton from '../DigitButton'
import backspaceIcon from '../../assets/images/backspace.svg'

export default {
  name: 'ButtonsGrid',
  setup() {
    const appendFormula = inject('appendFormula')
    const addOperator = inject('addOperator')
    const invertSignal = inject('invertSignal')
    const resolveFormula = inject('resolveFormula')
    const clear = inject('clear')
    const backspace = inject('backspace')

    return {
      appendFormula,
      addOperator,
      invertSignal,
      resolveFormula,
      clear,
      backspace,
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
    handleInvertSignalClick() {
      this.invertSignal()
    },
    handleEqualOperatorClick() {
      this.resolveFormula()
    },
    handleClearClick() {
      this.clear()
    },
    handleBackspaceClick() {
      this.backspace()
    },
  },
}
