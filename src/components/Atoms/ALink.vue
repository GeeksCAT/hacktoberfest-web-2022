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
</script>

<template>
  <a :href="href" class="text-third"><slot /></a>
</template>
