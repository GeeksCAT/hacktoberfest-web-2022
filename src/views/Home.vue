<script setup lang="ts">
import { IMenuOption } from '../types'

import SMenu from '../components/Sections/SMenu.vue'
import SIntro from '../components/Sections/SIntro.vue'
import SJoin from '../components/Sections/SJoin.vue'
import SWhatWeWillDo from '../components/Sections/SWhatWeWillDo.vue'
import SDiary from '../components/Sections/SDiary.vue'
import SCodeOfConduct from '../components/Sections/SCodeOfConduct.vue'
import SOrganizers from '../components/Sections/SOrganizers.vue'
import SSupporters from '../components/Sections/SSupporters.vue'
import SSponsors from '../components/Sections/Sponsors.vue'
import SContact from '../components/Sections/SContact.vue'
import SFooter from '../components/Sections/SFooter.vue'
import MGoUp from '../components/Modules/MGoUp.vue'
import SSpeakers from '../components/Sections/SSpeakers.vue'

const handlerMenuClick = (option: IMenuOption) => {
  ;(document.getElementById(option.ref) as HTMLElement).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  })
}
</script>

<template>
  <s-menu @click="handlerMenuClick" id="begin" />
  <s-intro id="intro" />
  <s-join id="join" />
  <s-what-we-will-do id="watWeWillDo" />
  <s-diary id="diary" />
  <s-speakers />
  <s-code-of-conduct id="codeOfConduct" />
  <s-organizers id="organizers" />
  <s-supporters id="supporters" />
  <s-sponsors id="sponsors" />
  <s-contact id="contact" />
  <s-footer />
  <m-go-up />
</template>
