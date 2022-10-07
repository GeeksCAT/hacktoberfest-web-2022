<script setup lang="ts">
import { organizers } from '../../content'
import ATitle from '../Atoms/ATitle.vue'
import ALink from '../Atoms/ALink.vue'

const getImageUrl = (name: string) => new URL(`../../assets/images/${name}`, import.meta.url).href
</script>

<template>
  <div>
    <ATitle>Organitzadors</ATitle>
    <div class="flex">
      <div v-for="(organizer, index) in organizers" :key="index" class="text-center grow">
        <img :src="getImageUrl(organizer.logo)" class="w-32 block mx-auto" />
        <ALink :href="organizer.web">{{ organizer.name }}</ALink>
      </div>
    </div>
  </div>
</template>
