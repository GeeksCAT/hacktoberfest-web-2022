<script setup lang="ts">
import ATitle from '../Atoms/ATitle.vue'
import ALink from '../Atoms/ALink.vue'
import ASection from '../Atoms/ASection.vue'
</script>

<template>
  <a-section class="dark">
    <a-title>Codi de conducta</a-title>
    <p class="text-center">
      Per participar hauràs d'acceptar el nostre
      <a-link target="_blank" href="https://www.contributor-covenant.org/ca/version/2/0/code_of_conduct/">codi de conducta</a-link> i el
      de
      <a-link target="_blank" href="https://docs.google.com/document/d/1gFKOhyUqMZzrZcbq8A_TpO5x9J9HK6agv70awCH8pyI/edit">
        Hacktoberfest
      </a-link>. Gràcies!
    </p>
  </a-section>
</template>
