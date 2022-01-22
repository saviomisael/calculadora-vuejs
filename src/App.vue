<template>
  <calc-provider>
    <calculator-box></calculator-box>
  </calc-provider>
</template>

<script>
import CalcProvider from './providers/CalcProvider'
import CalculatorBox from './components/CalculatorBox'

export default {
  components: {
    CalcProvider,
    CalculatorBox,
  },
}
</script>

<style lang="scss"></style>
