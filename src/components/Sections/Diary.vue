<script setup lang="ts">
import { diary } from '../../content'
import ATitle from '../Atoms/ATitle.vue'
import ASection from '../Atoms/ASection.vue'
</script>
<template>
  <ASection>
    <ATitle>Agenda</ATitle>
    <div v-for="(hour, index) in diary" :key="index">
      <b>{{ hour.hour }}</b>
      <div v-for="(room, index2) in hour.rooms" :key="index2" class="ml-4">
        Sala <b>{{ room.name }}</b> : <span class="text-primary">{{ room.event }}</span>
      </div>
    </div>
  </ASection>
</template>
