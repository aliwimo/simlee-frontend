<script setup lang="ts">

import { onMounted, ref } from 'vue'
import type { League } from '@/types/models/league';
import { leagueService } from '@/api/services/LeagueService.ts'

const leagues = ref<League[]>([]);

onMounted(async () => {
  try {
    leagues.value = await leagueService.getAll();
  } catch (error: any) {
    console.error(error);
  }
});

</script>

<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="league in leagues"
      :key="league.id"
      class="bg-white p-4 rounded shadow"
    >
      <div>{{ league.name }}</div>
      <div>{{ league.season }}/{{ league.season + 1 }}</div>
      <div>{{ league.teams_number }}</div>
      <div>{{ league.status }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>
