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
      Serà una trobada presencial a Girona el <b>{{ eventDate }}</b> a l'<a-link target="_blank" href="https://maps.app.goo.gl/o2wUXaaQ7Sn7bVpU7">espai de la Fundació ”la Caixa” de Girona</a-link>.
    </p>
    <p class="mb-4">
      Començarem a les <b>{{ startTime }}</b> i finalitzarem a les <b>{{ dueTime }}</b>, amb una pausa per dinar.
    </p>

    <p class="font-bold">Xerrades i tallers</p>
    <p class="mb-4">Durant tot el dia s'aniran fent xerrades i tallers sobre qualsevol tipus de tecnologia relacionada amb l'ecosistema Open Source</p>
    <p class="mb-4">Entre d'altres parlarem d'IA generativa, domòtica, flutter, món crypto divises, desenv web, ...</p>
    <p class="mb-4">Per més info revisa l'<a-link href="#diary">agenda</a-link>.</p>

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
  </a-section>
</template>
