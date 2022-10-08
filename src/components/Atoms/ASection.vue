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
  <div class="p-4" :class="variant"><slot /></div>
</template>

<style lang="scss" scoped>
.default {
}
.dark {
  @apply bg-secondary text-white;
}
</style>
