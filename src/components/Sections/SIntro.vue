<script setup lang="ts">
import { weWillHave } from '../../content'
import ASection from '../Atoms/ASection.vue'
import ATitle from '../Atoms/ATitle.vue'
</script>

<template>
  <a-section class="dark">
    <a-title variant="dark" class="mb-0 mt-4">OPEN SOURCE GIRONA</a-title>
    <h2 class="text-center text-third mb-4">2A EDICIÓ DE LA FESTA</h2>
    <h2 class="text-center text-sm text-gray-500">GEEKS.CAT & PYTHON GIRONA</h2>
    <p class="text-center py-4">
      El Hacktoberfest és un <b>esdeveniment</b> anual d'un <b>mes de duració</b> creat per animar als desenvolupadors
      de tot el món a <b>participar en projectes de codi obert</b>.
    </p>
    <p class="text-center py-4">Aquest any celebrem la segona edició de la <b>Festa de l'OpenSource</b>!</p>
    <p class="text-center pt-4">A GRANS TRETS TINDREM:</p>
    <ul class="text-center mb-4">
      <li v-for="(item, index) in weWillHave" :key="index">{{ item }}</li>
    </ul>
  </a-section>
</template>
