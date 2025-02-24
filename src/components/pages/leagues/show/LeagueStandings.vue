<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { leagueService } from '@/api/services/LeagueService.ts';
import type { Standing } from '@/types/models/standing';
import { DataTable, Column } from 'primevue';
import type { League } from '@/types/models/league';

const props = defineProps<{ league: League }>();
const standings = ref<Standing[]>([]);

const fetchStandings = async () => {
  try {
    standings.value = await leagueService.getStandings(props.league.id);
  } catch (error: any) {
    console.error(error);
  }
};

onMounted(async () => await fetchStandings());

watch(props.league, async() => await fetchStandings());

</script>

<template>
  <DataTable :value="standings" striped-rows column-resize-mode="fit">
    <Column>
      <template #body="slotProps">
        {{ slotProps.index + 1 }}
      </template>
    </Column>
    <Column header="Team">
      <template #body="slotProps">
        <span class="flex items-center gap-4">
          <img :src="slotProps.data.team.logo" :alt="slotProps.data.team.name" class="w-5 h-5 rounded" />
          <span>{{ slotProps.data.team.name }}</span>
        </span>
      </template>
    </Column>
    <Column field="played" header="P" class="hidden md:table-cell"></Column>
    <Column field="win" header="W"></Column>
    <Column field="draw" header="D"></Column>
    <Column field="lose" header="L"></Column>
    <Column field="goals_for" header="GF" class="hidden md:table-cell"></Column>
    <Column field="goals_against" header="GA" class="hidden md:table-cell"></Column>
    <Column field="goals_against" header="GD" class="hidden md:table-cell">
      <template #body="slotProps">
        <span>{{ slotProps.data.goals_for - slotProps.data.goals_against }}</span>
      </template>
    </Column>
    <Column field="points" header="Pts"></Column>
  </DataTable>
</template>

<style scoped></style>
