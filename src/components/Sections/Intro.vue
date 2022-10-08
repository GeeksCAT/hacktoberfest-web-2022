<script setup lang="ts">
import { weWillHave, year } from '../../content'
import ASection from '../Atoms/ASection.vue'
</script>

<template>
  <ASection class="dark">
    <h1 class="font-special text-center text-3xl mt-4">Hactoberfest {{ year }}</h1>
    <h2 class="text-center">GEEKS.CAT</h2>
    <p class="text-center py-4">
      El Hacktoberfest és un <b>esdeveniment</b> anual d'un <b>mes de duració</b> creat per animar als desenvolupadors
      de tot el món a <b>participar en projectes de codi obert</b>.
    </p>
    <p class="text-center py-4">Aquest any farem la <b>Festa de l'OpenSource a Girona</b>!</p>
    <p class="text-center pt-4">A GRANS TRETS TINDREM:</p>
    <ul class="text-center mb-4">
      <li v-for="(item, index) in weWillHave" :key="index">{{ item }}</li>
    </ul>
  </ASection>
</template>
