<script setup lang="ts">
import { diary } from '../../content'
import ATitle from '../Atoms/ATitle.vue'
import ASection from '../Atoms/ASection.vue'
</script>

<template>
  <a-section>
    <a-title variant="dark">Agenda</a-title>
    <!-- <div v-for="(hour, index) in diary" :key="index" class="mb-4">
      <b>{{ hour.hour }}</b>
      <div v-for="(room, index2) in hour.rooms" :key="index2" class="ml-4">
        Sala <b>{{ room.name }}</b> : <span>{{ room.event }}</span>
      </div>
    </div> -->

    <div class="overflow-x-auto">
      <table class="table table-auto w-full" cellpadding="8">
        <thead>
          <tr style="background: #efefef;">
            <th>Hora</th>
            <th>Auditori</th>
            <th>Tallers A</th>
            <th>Tallers B</th>
            <th>Open Room</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9:00</td>
            <td colspan="4">Obertura de portes</td>
          </tr>
          <tr>
            <td>9:30</td>
            <td>Benvinguda</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10:00</td>
            <td>Connectant la teva aplicació amb la IA</td>
            <td rowspan="2" valign="top">Enginy-era primària</td>
            <td rowspan="2" valign="top">Introducció a Kubernetes</td>
            <td rowspan="2" valign="top">Marató PRs</td>
          </tr>
          <tr>
            <td>10:30</td>
            <td>El món dels controladors leverless de hardware obert</td>
          </tr>
          <tr>
            <td>11:00</td>
            <td colspan="4">Descans</td>
          </tr>
          <tr>
            <td>11:30</td>
            <td rowspan="2" valign="top">Com extreure ofertes de feina a LinkedIn amb Puppeteer i RxJS </td>
            <td rowspan="2" valign="top">Enginy-era secundària</td>
            <td rowspan="2" valign="top">Introducció a Kubernetes</td>
            <td rowspan="5" valign="top">Marató PRs</td>
          </tr>
          <tr>
            <td>12:00</td>
          </tr>
          <tr>
            <td>12:30</td>
            <td>Me suenas: cómo nos conocimos antes de conocernos</td>
            <td></td>
            <td rowspan="3" valign="top">Introducción a Flutter</td>
          </tr>
          <tr>
            <td>13:00</td>
            <td rowspan="2" valign="top">Virtualització amb Proxmox / Sonic PI</td>
            <td rowspan="2" valign="top">AENTEG grup professionals AI</td>
          </tr>
          <tr>
            <td>13:30</td>
          </tr>
          <tr>
            <td>14:00</td>
            <td colspan="4">Dinar</td>
          </tr>
          <tr>
            <td>15:30</td>
            <td>Presentació programa de beques Google Summer of Code</td>
            <td></td>
            <td rowspan="3" valign="top">Domòtica amb HomeAssistant</td>
            <td rowspan="7" valign="top">Marató PRs</td>
          </tr>
          <tr>
            <td>16:00</td>
            <td rowspan="2" valign="top">Detectant problemes de web performance amb DevTools.</td>
            <td rowspan="2"></td>
          </tr>
          <tr>
            <td>16:30</td>
          </tr>
          <tr>
            <td>17:00</td>
            <td rowspan="2" valign="top">Models de llenguatge amb IA generativa: visió i experiència</td>
            <td rowspan="2"></td>
            <td></td>
          </tr>
          <tr>
            <td>17:30</td>
            <td rowspan="3" valign="top">Peach Bitcoin. La forma més fàcil i segura de començar en Bitcoin.</td>
          </tr>
          <tr>
            <td>18:00</td>
            <td rowspan="2">Blazor Poet's Arena - Webapp emprant C# contra OpenAI ChatGPT</td>
            <td rowspan="2"></td>
          </tr>
          <tr>
            <td>18:30</td>
          </tr>
          <tr>
            <td>19:00</td>
            <td colspan="4">Cloenda</td>
          </tr>
          <tr>
            <td>19:30</td>
            <td colspan="4">Tancament</td>
          </tr>
        </tbody>
      </table>
    </div>
  </a-section>
</template>

<style>
table,
th,
td {
  border: 1px solid grey;
  text-align: center;
}

td {
  min-width: 60px;
}

tr {
  height: 50px;
}

tr.double-tr {
  height: 100px;
}
</style>
