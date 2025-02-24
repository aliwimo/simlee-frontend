<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { leagueService } from '@/api/services/LeagueService.ts';
import type { Fixture } from '@/types/models/fixture';
import FixtureCard from '@/components/pages/leagues/show/FixtureCard.vue';
import { Select } from 'primevue';
import LeagueSimulators from '@/components/pages/leagues/show/LeagueSimulators.vue';
import { generateWeeks } from '@/utilities/array-generators.ts';
import type { League } from '@/types/models/league';


const props = defineProps<{ league: League }>();
const emit = defineEmits<{ (e: 'simulated'): void }>();
const fixtures = ref<Fixture[]>([]);

const weeks = ref<{ value: number, label: string }[]>([]);
const selectedWeek = ref<number>(1);

const refreshUI = async () => {
  emit('simulated');
};

const fetchFixtures = async () => {
  try {
    fixtures.value = await leagueService.getFixtures(props.league.id, selectedWeek.value);
  } catch (error: any) {
    console.error(error);
  }
};

onMounted(async () => {
  weeks.value = generateWeeks(props.league.teams_number);
  selectedWeek.value = props.league.current_week ?? 1;
  await fetchFixtures();
});

watch(selectedWeek, () => fetchFixtures());
watch(props.league, () => fetchFixtures());

</script>

<template>
  <div class="flex flex-col gap-2">
    <LeagueSimulators
      v-if="league.status == 'active'"
      :league="league"
      :selectedWeek="selectedWeek"
      @simulated="refreshUI"
    />

    <Select
      v-model="selectedWeek"
      :options="weeks"
      optionLabel="label"
      optionValue="value"
      placeholder="Select a Week"
    />

    <FixtureCard
      v-for="fixture of fixtures"
      :key="fixture.id"
      :fixture="fixture"
    />
  </div>
</template>
