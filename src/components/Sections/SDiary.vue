<script setup lang="ts">
import { diary } from '../../content'
import ATitle from '../Atoms/ATitle.vue'
import ASection from '../Atoms/ASection.vue'
</script>

<template>
  <a-section class="dark">
    <a-title variant="dark">Agenda</a-title>
    <!-- <div v-for="(hour, index) in diary" :key="index" class="mb-4">
      <b>{{ hour.hour }}</b>
      <div v-for="(room, index2) in hour.rooms" :key="index2" class="ml-4">
        Sala <b>{{ room.name }}</b> : <span>{{ room.event }}</span>
      </div>
    </div> -->

        <table class="table table-auto w-full">
          <thead>
            <tr>
              <th>Hora</th>
              <th>Sala polivalent</th>
              <th>Pati</th>
              <th>Claustre</th>
              <th>Aula 1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:30</td>
              <td rowspan="4"></td>
              <td>Obertura de portes</td>
              <td rowspan="2"></td>
              <td rowspan="2"></td>
            </tr>
            <tr>
              <td>10:00</td>
              <td>KickOff</td>
            </tr>
            <tr>
              <td>10:30</td>
              <td>"Control de l'automatització de tasques recurrents emprant Airflow" per Pau Boix@SOM</td>
              <td rowspan="2">Marató PR</td>
            </tr>
            <tr>
              <td>11:30</td>
              <td>"ESP32 emprant C + SSL" per Pablo Ridolfi</td>
            </tr>
            <tr>
              <td>13:00</td>
              <td colspan="4" class="text-center">Dinar</td>
            </tr>
            <tr>
              <td>15:30</td>
              <td rowspan="4">Taller Intro a Django</td>
              <td>"Introducció a Odoo, l'ERP de Python" per Oriol Piera@SOM</td>
              <td rowspan="4">Marató PR</td>
              <td rowspan="4">Marató PR</td>
            </tr>
            <tr>
              <td>16:30</td>
              <td>"OS datawarehouse" per Jorge@KaveHome</td>
            </tr>
            <tr>
              <td>17:30</td>
              <td>Lightning Talks</td>
            </tr>
            <tr>
              <td>19:00</td>
              <td class="text-center">Cloenda</td>
            </tr>
          </tbody>
        </table>

  </a-section>
</template>

<style>
table, th, td {
  border: 1px solid white;
  text-align: center;
}

td {
  min-width: 60px;
}

tr {
  height: 50px;
}
</style>