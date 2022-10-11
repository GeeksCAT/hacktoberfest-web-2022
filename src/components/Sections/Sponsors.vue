<script setup lang="ts">
import { sponsors } from '../../content'
import ATitle from '../Atoms/ATitle.vue'
import ASection from '../Atoms/ASection.vue'
import MLogosGallery from '../Modules/MLogosGallery.vue'
</script>

<template>
  <a-section>
    <a-title>Patrocinadors</a-title>
    <m-logos-gallery :items="sponsors" :show-link="false" />
  </a-section>
</template>
