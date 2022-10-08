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
  <ul class="flex gap-2">
    <li v-for="option in menuOptions" :key="option.ref" @click="handlerClick(option)" class="cursor-pointer">
      {{ option.name }}
    </li>
  </ul>
</template>
