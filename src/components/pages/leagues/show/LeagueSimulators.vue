<script setup lang="ts">
import { leagueService } from '@/api/services/LeagueService.ts';
import { Button } from 'primevue';
import type { League } from '@/types/models/league';
import { ref } from 'vue';

defineProps<{
  league: League;
  selectedWeek: number;
}>();

const loading = ref<boolean>(false);

const simulateLeague = async (leagueId: number) => {
  try {
    loading.value = true;
    await leagueService.simulate(leagueId);
    window.location.reload();
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const simulateWeek = async (leagueId: number, week: number) => {
  try {
    loading.value = true;
    await leagueService.simulateWeek(leagueId, week);
    window.location.reload();
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

</script>

<template>
  <div class="flex flex-col gap-2">
    <Button
      v-if="league.current_week <= selectedWeek"
      label="Simulate Week"
      :loading="loading"
      @click="simulateWeek(league.id, selectedWeek)"
      fluid
    />
    <Button
      label="Simulate League"
      @click="simulateLeague(league.id)"
      :loading="loading"
      fluid
    />
  </div>
</template>
