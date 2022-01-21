import OperatorButton from '../OperatorButton'
import DigitButton from '../DigitButton'
import backspaceIcon from '../../assets/images/backspace.svg'

export default {
  data() {
    return {
      backspaceIcon,
    }
  },
  components: {
    OperatorButton,
    DigitButton,
  },
}
