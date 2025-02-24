<script setup lang="ts">

import { onMounted, ref } from 'vue';
import type { League } from '@/types/models/league';
import { leagueService } from '@/api/services/LeagueService.ts';
import LeaguesListCard from '@/components/pages/leagues/index/LeaguesListCard.vue';

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
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <LeaguesListCard
      v-for="league in leagues"
      :key="league.id"
      :league="league"
    />
  </div>
</template>

<style scoped>

</style>
