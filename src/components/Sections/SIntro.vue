<script setup lang="ts">
import { weWillHave } from '../../content'
import ASection from '../Atoms/ASection.vue'
import ATitle from '../Atoms/ATitle.vue'
import ALink from '../Atoms/ALink.vue'
</script>

<template>
  <a-section class="dark section flex flex-col justify-center items-center">
    <a-title variant="dark" class="mb-12 text-7xl">OPEN SOURCE GIRONA 2023</a-title>
    <h2 class="text-center text-third mx-4 my-8 text-5xl">3a EDICIÓ DE LA FESTA</h2>
    <h2 class="text-center text-gray-500 text-3xl">GEEKS.CAT + GDG</h2>
    <p class="text-center mt-8 py-4">
      El <a-link target="_blank" href="https://hacktoberfest.com/">Hacktoberfest</a-link> és un <b>esdeveniment</b> anual d'un
      <b>mes de duració</b> creat per animar als desenvolupadors de tot el món a
      <b>participar en projectes de codi obert</b>.
    </p>
    <p class="text-center py-4">Aquest any celebrem la tercera edició de la <b>Festa de l'OpenSource</b>!</p>
    <p class="text-center pt-4 mb-4">Què farem?</p>
    <ul class="text-center mb-4">
      <li v-for="(item, index) in weWillHave" :key="index">{{ item }}</li>
    </ul>
  </a-section>
</template>

<style scoped lang="scss">
ul {
  @apply flex my-2 gap-4 justify-center;
  li {
    @apply border leading-4 py-2 px-4 border-fourth;
    $color1: #a1ffff;
    box-shadow: 0px 0px 15px $color1;
  }
}
.section {
  background-image: url(../../assets/images/bg.jpg);
  background-position: bottom;
  min-height: calc(100vh - 56px); // don't use h-screen to compute header height
}
</style>
