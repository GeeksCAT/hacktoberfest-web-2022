<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps({
  variant: {
    required: false,
    type: String,
    default: 'default',
    validator: (value: string) => ['default', 'dark'].includes(value)
  }
})
const { variant } = toRefs(props)
</script>

<template>
  <div class="text-center text-2xl mb-4 uppercase" :class="variant"><slot /></div>
</template>

<style lang="scss" scoped>
.default {
  $color1: #fff;
  $color2: rgb(3, 54, 46);
  $color3: #0fa;

  color: $color1;
  text-shadow: 0 0 7px $color2, 0 0 10px $color2, 0 0 21px $color2, 0 0 42px $color3, 0 0 82px $color3, 0 0 92px $color3,
    0 0 102px $color3, 0 0 151px $color3;
}
.dark {
  $color1: #000;
  $color2: #fff;
  $color3: #0fa;

  color: $color1;
  text-shadow: 0 0 7px $color2, 0 0 10px $color2, 0 0 21px $color2, 0 0 42px $color3, 0 0 82px $color3, 0 0 92px $color3,
    0 0 102px $color3, 0 0 151px $color3;
}
</style>
