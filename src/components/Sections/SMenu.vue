<script setup lang="ts">
import { IMenuOption } from '../../types'

const emit = defineEmits(['click'])

const menuOptions: IMenuOption[] = [
  {
    name: 'Inici',
    ref: 'begin'
  },
  {
    name: 'Agenda',
    ref: 'diary'
  },
  {
    name: 'Patrocinadors',
    ref: 'sponsors'
  },
  {
    name: 'Contacte',
    ref: 'contact'
  }
]

const handlerClick = (option: IMenuOption) => {
  emit('click', option)
}
</script>
<template>
  <div class="bg-gradient-to-b from-gray-800 to-black text-black p-4 flex justify-end">
    <ul class="flex gap-4">
      <li v-for="option in menuOptions" :key="option.ref" @click="handlerClick(option)" class="cursor-pointer text-white">
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
div {
  background-image: url(../../assets/images/bg.jpg);
  background-position: 0 bottom;
}
</style>
