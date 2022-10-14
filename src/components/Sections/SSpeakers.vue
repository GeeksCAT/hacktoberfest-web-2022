<script setup lang="ts">
import { speakers } from '../../content'
import ABox from '../Atoms/ABox.vue'
import ASection from '../Atoms/ASection.vue'
import ATitle from '../Atoms/ATitle.vue'
</script>

<template>
  <a-section>
    <a-title>Ponents</a-title>
    <div >
      <a-box v-for="speaker in speakers" :key="speaker.name" class="mb-4">
        <h4 class="font-bold">"<i>{{ speaker.talk }}</i>" per {{ speaker.name }}</h4>
        <a v-if="speaker.twitter" target="_blank" :href="`https://twitter.com/${speaker.twitter}`" class="text-sm">@{{ speaker.twitter }}</a>
        <a v-if="speaker.linkedin" target="_blank" :href="`https://www.linkedin.com/in//${speaker.linkedin}`" class="text-sm">@{{ speaker.linkedin }}</a>
        <p :key="summaryCount" v-for="(summaryEntry, summaryCount) in speaker.summary" id="summary" class="mt-4" v-html="summaryEntry"/>
        <p :key="bioCount" v-for="(bioEntry, bioCount) in speaker.bio" id="bio" class="mt-4" v-html="bioEntry"/>
      </a-box>
    </div>
  </a-section>
</template>
