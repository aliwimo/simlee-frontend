<script setup lang="ts">
import LeagueDetails from '@/components/pages/leagues/show/LeagueDetails.vue';
import LeagueStandings from '@/components/pages/leagues/show/LeagueStandings.vue'
import LeagueFixtures from '@/components/pages/leagues/show/LeagueFixtures.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import type { League } from '@/types/models/league'
import { leagueService } from '@/api/services/LeagueService.ts'

const route = useRoute();
const { id } = route.params;
const league = ref<League | null>(null);


const fetchLeague = async () => {
  try {
    league.value = await leagueService.getOne(parseInt(id as string));
  } catch (error: any) {
    console.error(error);
  }
};

onMounted(async () => await fetchLeague());

</script>

<template>
  <div>
    <div v-if="league" class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="col-span-1 md:col-span-2 bg-white p-4 rounded-lg shadow flex flex-col gap-4">
        <league-details :league="league" />
        <league-standings :league="league" />
      </div>
      <league-fixtures :league="league" class="col-span-1" />
    </div>
    <div v-if="league" class="grid grid-cols-3 md:grid-cols-4 gap-4"></div>
  </div>
</template>
