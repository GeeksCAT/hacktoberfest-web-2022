<script setup lang="ts">
import { IMenuOption } from '@/types'
import { ref } from 'vue'
import MMenuOptions from '../Modules/MMenuOptions.vue'

const emit = defineEmits(['click'])

const handlerClick = (option: IMenuOption) => {
  emit('click', option)
}
</script>

<template>
  <div class="bg-third text-white p-4 flex justify-end">
    <MMenuOptions @click="handlerClick" />
  </div>
</template>
