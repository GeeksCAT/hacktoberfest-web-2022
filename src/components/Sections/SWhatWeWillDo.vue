<script setup lang="ts">
import ATitle from '../Atoms/ATitle.vue'
import ALink from '../Atoms/ALink.vue'
import { startTime, dueTime, eventDate } from '../../content'
import ASection from '../Atoms/ASection.vue'
</script>

<template>
  <a-section>
    <a-title>Què farem?</a-title>
    <p class="mb-4">
      Serà una trobada presencial al <a-link href="https://web.girona.cat/ccm">Centre Cultural la Mercè</a-link> de
      Girona el dia <b>{{ eventDate }}</b
      >.
    </p>
    <p class="mb-4">
      Començarem a les <b>{{ startTime }}</b> i finalitzarem a les <b>{{ dueTime }}</b
      >, amb una pausa per dinar.
    </p>
    <p class="font-bold">Marató de PRs</p>
    <p class="mb-4">
      S'habilitarà un espai per a qui vulgui participar a la marató de PRs. Els grups, o equips, s'organitzaran insitu,
      tot hi que si algú vol fer-ho sol, total llibertat.
    </p>
    <p class="mb-4">
      Hi haurà un grup de mentors que ajudaran a dinamitzar l'esdeveniment, donant suport o proposant repos on
      contribuir-hi.
    </p>
    <p class="mb-4">La idea principal és passar-nos-ho bé i si a més aconseguim fer contribucions, més que millor!</p>
    <p class="font-bold">Xerrades</p>
    <p>En altres espais s'aniran impartint xerrades i tallers. Consulta l'agenda per veure'ns els horaris.</p>
  </a-section>
</template>
