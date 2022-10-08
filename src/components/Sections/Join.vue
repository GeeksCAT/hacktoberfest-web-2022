<script setup lang="ts">
import AButton from '../Atoms/AButton.vue'
import { eventBriteURL } from '../../content'
import ABox from '../Atoms/ABox.vue'
import ASection from '../Atoms/ASection.vue'
</script>

<template>
  <ASection>
    <ABox>
      <h3 class="text-center text-xl my-4">Vull participar!</h3>
      <p class="text-center my-4">
        Registra't a l'esdeveniment i ens posarem en contacte amb tu per organitzar-ho tot :)
      </p>
      <AButton class="mx-auto block" :href="eventBriteURL">Registra'm</AButton>
    </ABox>
  </ASection>
</template>
