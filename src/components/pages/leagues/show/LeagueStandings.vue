<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { League } from '@/types/models/league'
import { leagueService } from '@/api/services/LeagueService.ts';
import { useRoute } from 'vue-router';
import LeaguesListCard from '@/components/pages/leagues/index/LeaguesListCard.vue'

const route = useRoute();
const { id } = route.params;
const league = ref<League | null>(null);


onMounted(async () => {
  try {
    league.value = await leagueService.getOne(parseInt(id as string));
  } catch (error: any) {
    console.error(error);
  }
});

</script>

<template>
  <div class="">

  </div>
</template>

<style scoped></style>
