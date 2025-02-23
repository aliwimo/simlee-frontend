<script setup lang="ts">
import type { League } from '@/types/models/league';
import { Button } from 'primevue';

withDefaults(defineProps<{
  league: League,
  showLink?: boolean
}>(), {
  showLink: true,
});

</script>

<template>
  <div class="flex flex-col gap-4 bg-white p-4 rounded-lg shadow">
    <div class="flex flex-col">
      <span class="text-2xl font-bold text-primary-600">{{ league.name }}</span>
      <span class="text-xs italic">{{ league.season }}/{{ league.season + 1 }}</span>
    </div>

    <div class="flex justify-between gap-4">
      <span>{{ league.teams_number }}</span>
      <span>{{ league.status }}</span>
    </div>

    <Button v-show="showLink" label="Details" size="small" as="router-link" :to="`/league/${league.id}`" />
  </div>
</template>

<style scoped>

</style>
