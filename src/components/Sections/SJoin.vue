<script setup lang="ts">
import AButton from '../Atoms/AButton.vue'
import { eventBriteURL } from '../../content'
import ABox from '../Atoms/ABox.vue'
import ASection from '../Atoms/ASection.vue'
</script>

<template>
  <a-section class="dark">
    <a-box>
      <h3 class="text-center text-xl mm-4">Vull participar!</h3>
      <p class="text-center my-4">
        Registra't a l'esdeveniment i ens posarem en contacte amb tu per organitzar-ho tot :)
      </p>
      <a-button class="mx-auto block" variant="light" :href="eventBriteURL">Registra'm</a-button>
    </a-box>
  </a-section>
</template>
