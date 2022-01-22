<template>
  <calc-provider>
    <calculator></calculator>
  </calc-provider>
</template>

<script>
import CalcProvider from './providers/CalcProvider'
import Calculator from './components/Calculator'

export default {
  components: {
    CalcProvider,
    Calculator,
  },
}
</script>

<style lang="scss"></style>
