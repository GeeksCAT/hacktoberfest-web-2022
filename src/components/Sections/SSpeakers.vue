<script setup lang="ts">
import { speakers } from '../../content'
import ABox from '../Atoms/ABox.vue'
import ASection from '../Atoms/ASection.vue'
import ATitle from '../Atoms/ATitle.vue'
</script>

<template>
  <a-section>
    <a-title>Ponents</a-title>
    <div class="md:gap-4 md:columns-2">
      <a-box v-for="speaker in speakers" :key="speaker.name" class="mb-4">
        <h4 class="font-bold">{{ speaker.name }}</h4>
        <span class="text-sm">{{ speaker.twitter }}</span>
        <p class="mt-4">{{ speaker.summary }}</p>
      </a-box>
    </div>
  </a-section>
</template>
