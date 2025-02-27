<script setup lang="ts">

import type { Fixture } from '@/types/models/fixture';
import FixtureScore from '@/components/pages/leagues/show/FixtureScore.vue';
import { Button } from 'primevue';
import { fixtureService } from '@/api/services/FixtureService.ts';

defineProps<{ fixture: Fixture }>();

const emit = defineEmits(['simulated']);

const simulateFixture = async (fixtureId: number) => {
  try {
    await fixtureService.simulateFixture(fixtureId);
    emit('simulated');
  } catch (error) {
    console.log(error);
  }
};

</script>

<template>
  <div class="flex flex-col gap-2 bg-white p-4 rounded-lg shadow">
    <FixtureScore
      :team="fixture.home_team.name"
      :logo="fixture.home_team.logo!"
      :score="fixture.home_score"
      :played="fixture.played"
    />
    <FixtureScore
      :team="fixture.away_team.name"
      :logo="fixture.away_team.logo!"
      :score="fixture.away_score"
      :played="fixture.played"
    />
    <div>
      <Button
        v-if="!fixture.played"
        label="Simulate"
        severity="secondary"
        size="small"
        @click="simulateFixture(fixture.id)"
        fluid
      />
    </div>
  </div>
</template>

<style scoped>

</style>
