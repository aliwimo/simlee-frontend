<script setup lang="ts">

import AuthCard from '@/components/ui/auth/AuthCard.vue';
import ViewTitle from '@/components/ui/ViewTitle.vue';
import { onMounted, ref } from 'vue';
import { teamService } from '@/api/services/TeamService.ts'

const teams = ref([]);

onMounted(async () => {
  try {
    teams.value = await teamService.getAllTeams();
  } catch (error) {
    console.log(error);
  }
});

</script>

<template>
  <div>
    <ViewTitle title="Teams" subtitle="Teams" />
    <AuthCard />
    <div class="flex flex-col gap-2 mt-8 w-full bg-white p-4 rounded-2xl shadow">
      <div
        v-for="team in teams"
        :key="team.id"
        class="flex flex-row justify-between gap-2"
      >
        <span>{{ team.name }}</span>
        <span>{{ team.strength }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
