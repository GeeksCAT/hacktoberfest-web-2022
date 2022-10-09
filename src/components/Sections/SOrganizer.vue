<script setup lang="ts">
import { organizers } from '../../content'
import ATitle from '../Atoms/ATitle.vue'
import ALink from '../Atoms/ALink.vue'
import ASection from '../Atoms/ASection.vue'

const getImageUrl = (name: string) => new URL(`../../assets/images/${name}`, import.meta.url).href
</script>

<template>
  <a-section>
    <a-title>Organitzadors</a-title>
    <div class="flex">
      <div v-for="(organizer, index) in organizers" :key="index" class="text-center grow">
        <img :src="getImageUrl(organizer.logo)" class="w-32 block mx-auto" />
        <a-link :href="organizer.web">{{ organizer.name }}</a-link>
      </div>
    </div>
  </a-section>
</template>
