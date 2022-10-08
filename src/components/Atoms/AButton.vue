<script setup lang="ts">
import { toRefs } from 'vue'
const props = defineProps({
  href: {
    required: false,
    default: null,
    type: String
  },
  variant: {
    required: false,
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'light'].includes(value)
  }
})
const { href, variant } = toRefs(props)

const handlerClick = () => {
  if (!href.value) {
    return
  }
  window.location.href = href.value
}
</script>

<template>
  <button :class="variant" @click="handlerClick"><slot /></button>
</template>

<style lang="scss" scoped>
.primary {
  @apply bg-secondary text-white py-2 px-4;
}
.light {
  @apply bg-white text-secondary py-2 px-4;
}
</style>
