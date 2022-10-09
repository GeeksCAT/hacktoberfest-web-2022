<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ArrowUpCircleIcon } from '@heroicons/vue/24/solid'

const showIcon = ref(false)
const handlerGoUp = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  onscroll = () => {
    showIcon.value = window.scrollY > 61
  }
})
</script>

<template>
  <arrow-up-circle-icon
    class="fixed z-10 w-16 bottom-2 right-2 cursor-pointer text-primary"
    @click="handlerGoUp"
    v-if="showIcon" />
</template>
