<script setup lang="ts">
import { Tag } from 'primevue';
import type { League } from '@/types/models/league';

defineProps<{ league: League }>();
</script>

<template>
  <div>
    <div v-if="league" class="flex justify-between items-start">
      <div class="flex flex-col">
        <span class="text-xs italic">{{ league.season }}/{{ league.season + 1 }}</span>
        <span class="text-2xl font-bold text-primary-600">{{ league.name }}</span>
        <span v-if="league.status == 'active'" class="text-xs italic">Week {{ league.current_week }}</span>
      </div>
      <div>
        <Tag v-if="league.status == 'active'" severity="success" value="Success">Ongoing</Tag>
        <Tag v-else severity="secondary" value="Success">Ended</Tag>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
