<script setup lang="ts">
import type { League } from '@/types/models/league';
import { Button, Tag } from 'primevue';

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

    <div class="flex justify-between items-center gap-4">
      <span class="font-semibold text-sm">Teams: {{ league.teams_number }}</span>
      <div>
        <Tag v-if="league.status == 'active'" severity="success" value="Success">Ongoing</Tag>
        <Tag v-else severity="secondary" value="Success">Ended</Tag>
      </div>
    </div>

    <Button v-show="showLink" label="Details" size="small" as="router-link" :to="`/league/${league.id}`" />
  </div>
</template>

<style scoped>

</style>
