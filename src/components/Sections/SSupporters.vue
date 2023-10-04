<script setup lang="ts">
import { supporters } from '../../content'
import ATitle from '../Atoms/ATitle.vue'
import ASection from '../Atoms/ASection.vue'
import MLogosGallery from '../Modules/MLogosGallery.vue'
</script>

<template>
  <a-section>
    <a-title>Amb el suport de</a-title>
    <m-logos-gallery :items="supporters" :show-link="false" />
  </a-section>
</template>
