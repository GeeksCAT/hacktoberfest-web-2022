<script setup lang="ts">
import { supporters } from "../../content";
import ATitle from "../Atoms/ATitle.vue";
import ALink from "../Atoms/ALink.vue";
import ASection from "../Atoms/ASection.vue";

const getImageUrl = (name: string) =>
  new URL(`../../assets/images/${name}`, import.meta.url).href;
</script>

<template>
  <a-section>
    <a-title>Amb el support de</a-title>
    <div class="flex flex-wrap">
      <div
        v-for="(sponsor, index) in supporters"
        :key="index"
        class="text-center w-1/2 my-4"
      >
        <a-link :href="sponsor.web">
          <img :src="getImageUrl(sponsor.logo)" class="w-32 block mx-auto" />
        </a-link>
      </div>
    </div>
  </a-section>
</template>
