<script setup lang="ts">
import { leagueService } from '@/api/services/LeagueService.ts';
import { Button } from 'primevue';
import type { League } from '@/types/models/league';

const emit = defineEmits<{ (e: 'fixture-updated'): void }>();
defineProps<{
  league: League;
  selectedWeek: number;
}>();

const simulateLeague = async (leagueId: number) => {
  try {
    await leagueService.simulate(leagueId);
    emit('fixture-updated');
  } catch (error) {
    console.error(error);
  }
};

const simulateWeek = async (leagueId: number, week: number) => {
  try {
    await leagueService.simulateWeek(leagueId, week);
    emit('fixture-updated');
  } catch (error) {
    console.error(error);
  }
};

</script>

<template>
  <div class="flex flex-col gap-2">
    <Button
      v-if="league.current_week <= selectedWeek"
      label="Simulate Week"
      @click="simulateWeek(league.id, selectedWeek)"
      fluid
    />
    <Button
      label="Simulate League"
      @click="simulateLeague(league.id)"
      fluid
    />
  </div>
</template>
