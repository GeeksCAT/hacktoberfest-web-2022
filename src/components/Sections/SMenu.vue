<script setup lang="ts">
import { IMenuOption } from '@/types'
import MMenuOptions from '../Modules/MMenuOptions.vue'

const emit = defineEmits(['click'])

const handlerClick = (option: IMenuOption) => {
  emit('click', option)
}
</script>

<template>
  <div class="bg-third text-white p-4 flex justify-end">
    <m-menu-options @click="handlerClick" />
  </div>
</template>
