<script setup lang="ts">
import { IMenuOption } from '../types'

import SMenu from '../components/Sections/SMenu.vue'
import SIntro from '../components/Sections/SIntro.vue'
import SJoin from '../components/Sections/SJoin.vue'
import SWhatWeWillDoLite from '../components/Sections/SWhatWeWillDoLite.vue'
import SDiary from '../components/Sections/SDiary.vue'
import SCodeOfConduct from '../components/Sections/SCodeOfConduct.vue'
import SOrganizers from '../components/Sections/SOrganizers.vue'
import SSupporters from '../components/Sections/SSupporters.vue'
import SSponsors from '../components/Sections/Sponsors.vue'
import SContact from '../components/Sections/SContact.vue'
import SFooter from '../components/Sections/SFooter.vue'
import MGoUp from '../components/Modules/MGoUp.vue'
import SSpeakers from '../components/Sections/SSpeakers.vue'
import SCall4Sponsors from '../components/Sections/SCall4Sponsors.vue'

const handlerMenuClick = (option: IMenuOption) => {
  ; (document.getElementById(option.ref) as HTMLElement).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  })
}
</script>

<template>
  <s-menu @click="handlerMenuClick" id="begin" />
  <s-intro id="intro" />
  <s-what-we-will-do-lite id="watWeWillDo" />
  <s-join id="join" />
  <s-diary id="schedule" />
  <!--
  <s-speakers />
-->
  <s-code-of-conduct id="codeOfConduct" />
  <s-organizers id="organizers" />
  <s-supporters id="supporters" />
  <s-sponsors id="sponsors" />
  <s-call4-sponsors id="call4sponsors" />
  <s-contact id="contact" />
  <s-footer />
  <m-go-up />
</template>
