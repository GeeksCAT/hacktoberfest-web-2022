<script setup lang="ts">
import { organizers } from '../../content'
import ATitle from '../Atoms/ATitle.vue'
import ASection from '../Atoms/ASection.vue'
import MLogosGallery from '../Modules/MLogosGallery.vue'
</script>

<template>
  <a-section>
    <a-title>Organitzadors</a-title>
    <m-logos-gallery :items="organizers" />
  </a-section>
</template>
