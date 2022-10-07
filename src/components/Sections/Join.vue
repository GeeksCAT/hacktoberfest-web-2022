<script setup lang="ts">
import AButton from '../Atoms/AButton.vue'
import { eventBriteURL } from '../../content'
</script>

<template>
  <div class="border-2 m-4 rounded-lg p-4 border-primary">
    <h3 class="text-center text-xl my-4">Vull participar!</h3>
    <p class="text-center my-4">
      Registra't a l'esdeveniment i ens posarem en contacte amb tu per organitzar-ho tot :)
    </p>
    <AButton class="mx-auto block" :href="eventBriteURL">Registra'm</AButton>
  </div>
</template>
