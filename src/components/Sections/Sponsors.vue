<script setup lang="ts">
import { sponsors } from '../../content'
import ATitle from '../Atoms/ATitle.vue'
import ALink from '../Atoms/ALink.vue'
import ASection from '../Atoms/ASection.vue'

const getImageUrl = (name: string) => new URL(`../../assets/images/${name}`, import.meta.url).href
</script>

<template>
  <ASection>
    <ATitle>Patrocinadors</ATitle>
    <div class="flex flex-wrap">
      <div v-for="(sponsor, index) in sponsors" :key="index" class="text-center w-1/2">
        <ALink :href="sponsor.web">
          <img :src="getImageUrl(sponsor.logo)" class="w-32 block mx-auto" />
        </ALink>
      </div>
    </div>
  </ASection>
</template>
