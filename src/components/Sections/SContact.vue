<script setup lang="ts">
import ATitle from '../Atoms/ATitle.vue'
import ABox from '../Atoms/ABox.vue'
import AButton from '../Atoms/AButton.vue'
import ASection from '../Atoms/ASection.vue'

const handlerClick = () => {
  window.location.href = 'https://geekscat.us2.list-manage.com/subscribe/post?u=04c7e5f2cdec77b33da4fb17e&id=c91e51c76c'
}
</script>

<template>
  <a-section variant="dark">
    <a-title variant="dark">Contacte</a-title>
    <a-box class="flex flex-wrap justify-center text-center">
      <p class="mb-2 w-full">Vull estar al corrent de les novetats de Geeks.CAT</p>
      <a-button variant="light" @click="handlerClick">Notifica'm</a-button>
    </a-box>
  </a-section>
</template>
