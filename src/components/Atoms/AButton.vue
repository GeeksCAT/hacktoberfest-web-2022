<script setup lang="ts">
import { toRefs } from 'vue'
const props = defineProps({
  href: {
    required: false,
    default: null,
    type: String
  }
})
const { href } = toRefs(props)
const handlerClick = () => {
  if (!href.value) {
    return
  }
  window.location.href = href.value
}
</script>

<template>
  <button class="bg-secondary text-white py-2 px-4" @click="handlerClick"><slot /></button>
</template>
