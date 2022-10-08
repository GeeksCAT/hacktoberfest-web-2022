<script setup lang="ts">
import { IMenuOption } from './types'

import Menu from './components/Sections/Menu.vue'
import Intro from './components/Sections/Intro.vue'
import Join from './components/Sections/Join.vue'
import WhatWeWillDo from './components/Sections/WhatWeWillDo.vue'
import Diary from './components/Sections/Diary.vue'
import CodeOfConduct from './components/Sections/CodeOfConduct.vue'
import Organizer from './components/Sections/Organizer.vue'
import Sponsors from './components/Sections/Sponsors.vue'
import Contact from './components/Sections/Contact.vue'
import Footer from './components/Sections/Footer.vue'

const handlerMenuClick = (option: IMenuOption) => {
  ;(document.getElementById(option.ref) as HTMLElement).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  })
}
</script>

<template>
  <Menu @click="handlerMenuClick" id="begin" />
  <Intro />
  <Join />
  <WhatWeWillDo id="watWeWillDo" />
  <Diary id="diary" />
  <CodeOfConduct />
  <Organizer />
  <Sponsors id="sponsors" />
  <Contact id="contact" />
  <Footer />
</template>
