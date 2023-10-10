<script setup lang="ts">
import { toRefs, PropType } from 'vue'
import { ILogo } from '../../types'

import ALink from '../Atoms/ALink.vue'

const getImageUrl = (name: string) => new URL(`../../assets/images/${name}`, import.meta.url).href
const props = defineProps({
  items: {
    required: true,
    type: Object as PropType<ILogo[]>
  },
  showLink: {
    required: false,
    default: true,
    type: Boolean
  }
})
const { items, showLink } = toRefs(props)
</script>

<template>
  <div class="flex flex-wrap">
    <a v-for="(item, index) in items" :key="index" :href="item.web" target="_blank"
      class="text-center w-1/2 my-4 md:w-1/3">
      <span v-if="item.title" class="text-xs">{{ item.title }}</span>
      <img :title="item.title" :src="getImageUrl(item.logo)" class="w-32 max-w-32 block mx-auto" />
      <a-link :href="item.web" target="_blank" v-if="showLink">{{ item.name }}</a-link>
    </a>
  </div>
</template>
