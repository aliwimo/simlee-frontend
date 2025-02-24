<script setup lang="ts">
import ViewTitle from '@/components/ui/ViewTitle.vue';
import WelcomeCard from '@/components/ui/WelcomeCard.vue';
import LeaguesList from '@/components/pages/leagues/index/LeaguesList.vue';
</script>

<template>
  <div>
    <ViewTitle title="SimLee" subtitle="Home of Leagues!" />
    <WelcomeCard />
    <div class="mt-8 w-full max-w-2xl mx-auto">
      <LeaguesList />
    </div>
  </div>
</template>
