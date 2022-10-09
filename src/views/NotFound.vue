<script setup lang="ts">
import { HandThumbDownIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="bg-secondary text-white p-8 fixed inset-0 flex flex-col items-center">
    <hand-thumb-down-icon class="w-10 mb-4 mt-10" />
    <p class="mb-4">On vas, cap de fava!</p>
    <router-link :to="{ name: 'home' }" class="text-primary block">Vinga, va, torna a l'inici</router-link>
  </div>
</template>
